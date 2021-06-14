import { IconLink } from '../components';
import styles from './styles/social-links.module.scss';

const links = [
  {
    name: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    name: 'LinkedIn',
    title: 'LinkedIn Ricardo Lopes',
    url: 'https://www.linkedin.com/in/riclop',
  },
  {
    name: 'StackOverflow',
    title: 'Stack Overflow @Raicuparta',
    url: 'https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile',
  },
  {
    name: 'Dev',
    title: 'DEV @Raicuparta',
    url: 'https://dev.to/raicuparta',
  },
  {
    name: 'Medium',
    title: 'Medium @Raicuparta',
    url: 'https://medium.com/@Raicuparta',
  },
  {
    name: 'Github',
    title: 'Github @Raicuparta',
    url: 'https://github.com/Raicuparta',
  },
] as const;

export const SocialLinks = () => (
  <>
    <div className={styles.wrapper}>
      <nav className={styles.socialLinks}>
        {links.map((link) => (
          <IconLink key={link.name} {...link} />
        ))}
      </nav>
    </div>
    <div className={styles.background} />
  </>
);
