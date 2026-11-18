import { usmp as u } from "@/lib/universities/usmp";
import { uniMetadata } from "@/lib/universities";
import { UniversityPage } from "@/components/university/UniversityPage";

export const metadata = uniMetadata(u);

export default function Page() {
  return <UniversityPage u={u} />;
}
