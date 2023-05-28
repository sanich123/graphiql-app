import { Editor } from '../components';
import dynamic from 'next/dynamic';
// import SearchApi from '@/components/search-api/seacrh-api';

const DynamiSchema = dynamic(() => import('../components/schema/schema'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function GraphiQl() {
  return (
    <main>
      {/* <SearchApi /> */}
      <DynamiSchema />
      <Editor />
    </main>
  );
}
