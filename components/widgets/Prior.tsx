import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Hire from '../ui/Hire'

const Prior = () => {
  return (
    <div className='w-full flex flex-col gap-4 md:px-10 px-4 md:py-20 py-5'>
      {/* Heading with Para */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <div className='w-2 h-20 md:block hidden bg-black'></div>
          <div className='md:text-[64px] text-[3rem] leading-none tracking-tight font-extrabold text-darkblue'>Prior Authorization Services</div>
        </div>
        {/* Paras */}
        <div className='flex flex-col gap-2 text-zinc-600 text-justify'>
          <div>The time consuming nature of manual prior authorization services, with data entry and the challenging nature of tracking can deviate you from focusing on your patients. Traditional processes with lack of transparency, long waiting periods can lead to lack luster patient engagement efforts even leading to drastic consequences.  </div>
          <div className='flex flex-col'>
            <div>Exploring options and choosing the ideal among prior authorization companies can be a confusing job. That’s why; we can be your potential guide to deliver tailored prior authorization solutions!</div>
            <div>Our exceptional services simplify the pre certification process needed for hospital admissions, surgeries, outpatient procedures, and more. Ensuring that all the payer’s requirements have been fulfilled before submitting a pre-authorization request, to form-completion and document submission, to following up on the submitted request, we provide end-to-end solutions for the smoothest experience through every step of the Pre Authorization requesting process.</div>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <div className="px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-darkblue">What is prior authorization?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Prior authorization is a process used by health insurance companies to determine if they will cover a prescribed procedure, service, or medication. It involves a review of the medical necessity of the treatment.
              </div>
              <div>
                Examples of services requiring prior authorization include advanced imaging like MRIs, certain surgeries, and expensive medications.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-darkblue">Why is prior authorization required?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Insurance providers require prior authorization to manage costs, prevent misuse of medical services, and ensure that treatments meet medical guidelines. 
              </div>
              <div>
                By requiring this step, payers aim to reduce the approval of unnecessary or inappropriate treatments.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-darkblue">What happens if prior authorization is not obtained?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                If prior authorization is not obtained, the insurance provider may deny coverage for the service or treatment. This could leave the patient responsible for the full cost.
              </div>
              <div>
                Ensuring prior authorization is obtained can save both time and financial resources for patients and providers.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-darkblue">How can prior authorization streamline healthcare?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Properly managed prior authorization ensures that patients receive medically necessary care without delays while avoiding overutilization of healthcare services.
              </div>
              <div>
                It supports providers in adhering to payer policies, reducing claim denials, and improving the overall efficiency of the revenue cycle.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Hire */}
      <div>
        <Hire />
      </div>
    </div>
  )
}

export default Prior