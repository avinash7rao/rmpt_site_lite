import { privacyPolicy } from "../../../data/PrivacyPolicyData";
import { LegalDocument } from "../../../components/_pageContent/LegalDocument";

export default function PrivacyPage() {
  return <LegalDocument sections={privacyPolicy} />;
}
