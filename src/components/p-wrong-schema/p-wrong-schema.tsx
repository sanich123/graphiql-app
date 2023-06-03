import styles from '../schema/schema.module.scss';

export default function PWrongSchema() {
  const { pInfoCorrect } = styles;
  return <p className={pInfoCorrect}>Enter correct api</p>;
}
