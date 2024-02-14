import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { YoutubeEmbed } from './youtube-embed/youtube-embed';
import { LinkListItem } from './link-list-item';
import { Card } from './card';
import { Project } from '../data/mods';
import { Icon } from './icon';
import { css } from '../styled-system/css';
import { flex, hstack, stack, vstack } from '../styled-system/patterns';

export type Article = {
  url: string;
  title: string;
  image: string;
  favicon: string;
  siteName: string;
};

export type Video = {
  url: string;
  title: string;
  image: string;
};

type Props = {
  project: Project;
  articles?: Article[];
  videos?: Video[];
  children?: React.ReactNode;
};

export const ProjectCard = (props: Props) => {
  const imagePath = `/img/projects/${props.project.id}.png`;

  return (
    <Card>
      <div className={flex({ position: 'relative', justify: 'center' })}>
        <div className={css({ position: 'absolute', left: 0, top: 0 })}>
          <ButtonLink
            className={flex({
              background: 'black',
              opacity: 0.5,
              roundedBottomRight: 'md',
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'white/25',
              paddingX: 2,
              height: '100%',
              alignItems: 'center',
              gap: 2,
              padding: 2,
              _hover: { opacity: 0.75 },
            })}
            href="/"
          >
            <Icon name="Back" className={css({ height: 6 })} />
            <span>Home</span>
          </ButtonLink>
        </div>
        <div className={css({ margin: 6, textAlign: 'center' })}>
          <h2 className={css({ fontSize: '3xl', fontWeight: 'normal' })}>
            {props.project.title}
          </h2>
          {props.project.subtitle && <p>{props.project.subtitle}</p>}
        </div>
        <div
          className={css({
            position: 'absolute',
            top: '0',
            zIndex: -10,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            background: 'black',
          })}
        >
          <Image
            className={css({
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(10px)',
              transform: 'scale(1.2)',
              opacity: 0.75,
            })}
            src={imagePath}
            fill
            priority
            alt={props.project.title}
          />
        </div>
      </div>
      <div className={vstack({ padding: 4, gap: 6 })}>
        {props.project.description && <p>{props.project.description}</p>}
        <div
          className={stack({
            alignItems: 'center',
            justify: 'center',
          })}
        >
          {props.project.buttons.map((button, index) => (
            <IconButton
              key={button.url}
              href={button.url}
              iconName={button.icon}
              className={
                index > 0
                  ? css({ background: 'purple', paddingY: 1 })
                  : css({
                      background: 'cta',
                      color: 'purple',
                      fontWeight: 'normal',
                    })
              }
            >
              {button.label}
            </IconButton>
          ))}
        </div>
        {props.children}
        {props.project.mainVideo && (
          <YoutubeEmbed
            urlOrId={props.project.mainVideo}
            poster="maxresdefault"
            title={`${props.project.title} (${props.project.subtitle}) video.`}
          />
        )}
        {props.videos && props.videos.length > 0 && (
          <Section title="More Videos">
            <div className={hstack({ flexWrap: 'wrap', justify: 'center' })}>
              {props.videos.map((video) => (
                <ButtonLink
                  className={css({
                    rounded: 'md',
                    overflow: 'hidden',
                    position: 'relative',
                  })}
                  key={video.url}
                  href={video.url}
                >
                  <div className={css({ fontSize: 0 })}>
                    <Image
                      width={320}
                      height={180}
                      src={video.image}
                      alt={video.title}
                      priority
                    />
                  </div>
                  <span
                    className={css({
                      position: 'absolute',
                      top: 0,
                      fontSize: 'xs',
                      fontWeight: 'semibold',
                      background: 'black/75',
                      margin: 1,
                      rounded: 'md',
                      padding: 1,
                    })}
                  >
                    {video.title}
                  </span>
                </ButtonLink>
              ))}
            </div>
          </Section>
        )}
        {props.articles && props.articles.length > 0 && (
          <Section title="Articles">
            <LinkList>
              {props.articles.map((article) => (
                <LinkListItem key={article.url} url={article.url}>
                  <div
                    className={flex({
                      position: 'relative',
                      rounded: 'md',
                      overflow: 'hidden',
                    })}
                  >
                    <Image src={article.image} width={160} height={90} alt="" />
                    <div
                      className={css({ position: 'absolute', top: 0, left: 0 })}
                    >
                      <Image
                        src={article.favicon}
                        width={32}
                        height={32}
                        className={css({
                          roundedBottomRight: 'md',
                          background: 'white',
                        })}
                        alt={article.siteName}
                      />
                    </div>
                  </div>
                  <div className={css({ flex: 1 })}>
                    {article.siteName && (
                      <p className={css({ fontWeight: 'bold' })}>
                        {article.siteName}
                      </p>
                    )}
                    <p>{article.title}</p>
                  </div>
                </LinkListItem>
              ))}
            </LinkList>
          </Section>
        )}
        {props.project.moreLinks.length > 0 && (
          <Section title="More">
            <LinkList>
              {props.project.moreLinks.map((gameLink) => (
                <LinkListItem key={gameLink.url} url={gameLink.url}>
                  {gameLink.label}
                </LinkListItem>
              ))}
            </LinkList>
          </Section>
        )}
      </div>
    </Card>
  );
};
