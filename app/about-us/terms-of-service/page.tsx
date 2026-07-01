import { termsData } from "../../../data/TermsServiceData";
import { LegalDocument } from "../../../components/_pageContent/LegalDocument";

export default function TermsOfServicePage() {
  return <LegalDocument sections={termsData} />;
}
