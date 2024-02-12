import { ProjectCard } from '../components/project-card';
import { websiteUrl } from '../helpers/constants';
import { PageHead } from '../components/page-head';
import { getLinkPreview } from 'link-preview-js';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { URL } from 'url';
import { TextLink } from '../components/text-link';
import { Card } from '../components/card';
import { mods } from '../data/mods';

export type Mod = InferGetStaticPropsType<typeof getStaticProps>;

const ModPage = (props: Mod) => (
  <>
    <PageHead
      description={`${props.title} is a mod that converts "${props.gameName}" into a VR game.`}
      imageUrl={`${websiteUrl}${`/mods/${props.id}.jpg`}`}
      title={`${props.title} mod for ${props.gameName}`}
      imageWidth={400}
      imageHeight={225}
      largeImage
    />
    <Card className="mb-2 p-2" data-nosnippet>
      <TextLink href="/" isExternal={false}>
        Homepage
      </TextLink>
      <span className="text-xl leading-none">{' › '}</span>
      <span>{props.title}</span>
    </Card>
    <ProjectCard project={props} />
  </>
);

export async function getStaticPaths() {
  return {
    paths: mods.map((mod) => ({
      params: {
        modPage: `${mod.id}-vr-mod`,
      },
    })),
    fallback: false,
  };
}

function filterUndefined<T>(item: T | undefined): item is T {
  return item != undefined;
}

const getPreview = (url: string) =>
  getLinkPreview(url, {
    followRedirects: 'follow',
    timeout: 20000,
    headers: {
      'user-agent': 'googlebot',
    },
  });

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const modPage = context.params?.modPage;

  if (typeof modPage != 'string') {
    throw new Error(
      `modPage param is of wrong type. Expected string, got ${typeof modPage}`,
    );
  }

  const modId = modPage.replace('-vr-mod', '');
  const mod = mods.find(({ id }) => id === modId);

  if (!mod) {
    throw new Error(`failed to find mod for modPage ${modPage}`);
  }

  const articles = (
    await Promise.all(
      mod.articles.map(async (articleUrl) => {
        try {
          const linkPreview = await getPreview(articleUrl);

          if (!('title' in linkPreview) || linkPreview.images.length === 0) {
            return undefined;
          }

          console.log('thing', linkPreview);

          const url = new URL(articleUrl).hostname.replace('www.', '');

          return {
            url: linkPreview.url,
            title: linkPreview.title,
            image: linkPreview.images[0] ?? '',
            favicon: linkPreview.favicons[linkPreview.favicons.length - 1],
            siteName: linkPreview.siteName ?? url,
          };
        } catch (error) {
          console.error(
            `Failed to get article from url ${articleUrl}: ${error}`,
          );
          return undefined;
        }
      }),
    )
  ).filter(filterUndefined);

  const videos = (
    await Promise.all(
      mod.videos.map(async (videoUrl) => {
        const linkPreview = await getPreview(videoUrl);

        if (!('title' in linkPreview)) return undefined;

        return linkPreview;
      }),
    )
  ).filter(filterUndefined);

  return {
    props: {
      ...mod,
      articles,
      videos,
    },
  };
};

export default ModPage;
