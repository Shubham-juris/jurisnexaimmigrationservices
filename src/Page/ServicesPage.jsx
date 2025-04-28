import ServicesHeader from '../components/Services/Servicesheader'
import EducationConsultant from '../components/Services/EducationConsultant'
import EducationConsultantServices from '../components/Services/EducationConsultantServices'
import VisaApplication from '../components/Services/VisaApplication'
export default function ServicesPage () {
  return (
    <>
        <ServicesHeader />
        <EducationConsultant />
        <EducationConsultantServices />
        <VisaApplication/>
    </>
  )
}