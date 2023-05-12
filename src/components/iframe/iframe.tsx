import { LINKS } from '@/utils/const';

export default function IFrame({ activeTab }: { activeTab: string }) {
  return (
    <iframe
      className="tabs__iframe"
      width="500"
      height="300"
      src={LINKS[activeTab as keyof typeof LINKS]}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
