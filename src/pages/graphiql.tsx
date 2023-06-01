import { Editor } from '../components';
import dynamic from 'next/dynamic';

const DynamiSchema = dynamic(() => import('../components/schema/schema'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function GraphiQl() {
  return (
    <main>
      <DynamiSchema />
      <Editor />
    </main>
  );
}
