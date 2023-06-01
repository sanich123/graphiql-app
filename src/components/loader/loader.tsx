import styles from './loader.module.scss';

export default function Loader() {
  const { ldsHeart } = styles;
  return (
    <div className={ldsHeart}>
      <div></div>
    </div>
  );
}
