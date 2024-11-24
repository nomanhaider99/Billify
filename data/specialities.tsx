import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const dmePoints = (
    <div className="flex flex-col gap-1">
        <div>Efficient and accurate billing solutions for DME providers.</div>
        <div>Streamlined processes for faster reimbursement.</div>
        <div>Dedicated support for compliance and audits.</div>
    </div>
);

const priorAuthorizationPoints = (
    <div className="flex flex-col gap-1">
        <div>Fast and reliable prior authorization services.</div>
        <div>Improved approval timelines to minimize delays.</div>
        <div>Expert handling of all documentation and submission processes.</div>
    </div>
);

const revenueCycleManagementPoints = (
    <div className="flex flex-col gap-1">
        <div>Comprehensive revenue cycle management for improved cash flow.</div>
        <div>Optimized billing and collections to maximize reimbursement.</div>
        <div>Strategic financial oversight to ensure operational efficiency.</div>
    </div>
);

export const dmeDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
        <div>
            <p>Today finding an efficient way to bill durable medical equipment (DME) is crucial for the healthcare sector’s financial stability. As DME covers a vast range of DME devices – starting from oxygen equipment, wheelchairs, crutches blood testing strips and more it is very essential for DME billers to understand that every DME code is different and so are DME guidelines.   This specialized field of billing in fact involves intricate regulations, constantly changing payer policies, and meticulous documentation requirements and regulations. Furthermore, as DME means a varied assortment of devices and equipment used under prescription from healthcare professionals or physicians in assisting patients in their recovery or managing chronic illness; its billing operation demands more attention.</p>
        </div>
        {/* Accordians */}
        <div className="px-5">
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-darkblue">What is DME?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-lightblue">
                    <div>Durable Medical Equipment (DME) is a therapeutic item that is prescribed by the physicians to patients that are suffering from a certain medical condition. Beyond reasonable medical needs or necessity, a provider cannot offer these items before following a comprehensive DME billing services process.</div>
                    <div>CPAP, Nebulizers, kidney machines can be some of the examples of Durable Medical Equipment. A major chunk of Durable Medical Equipment is usually aimed at extending therapeutics relief for patients with a long term critical condition. Items under DME are durable for an extended period of operations. Hence, billing services for DME manufacturers require specialized intervention.</div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-darkblue">What is DME billing?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-lightblue">
                    <div>After the invoice is coded, it is important to collate all the documents and continue the process of claims submission in DME billing services. Missing documents or not having prior knowledge of payer requirements can be the reasons for higher rates of denial. Clean claims can reduce denials, days in A/R, and guarantee improved cash flow. Outsource DME billing services is the process of effectively managing the front and back end activities needed to submit and get paid for a claim from the insurance with a reliable vendor.</div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-darkblue">What is DME coding?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-lightblue">
                    <div>Medical coding is a specialized segment and coders who work will know all the directory of codes that are used under the DME services. It translates the procedure involved and is helpful for providers and distributors track the billing for fast-tracking the claim in billing services for DME prescribers. An example of the HCPCS code for CPAP is E0601.</div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-darkblue">What sets DME billing different from standard medical billing procedures?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-lightblue">
                    <div>What sets DME billing apart from other forms of medical billing is its unique structure, characterized by two primary components. Firstly, it accommodates rentals, offering flexibility in billing arrangements. Secondly, DME billing mandates the use of HCPCS(Healthcare Common Procedure Coding System) codes for accurate claim submissions. These codes play a crucial role in identifying the specific item or service billed. For example, the HCPCS code E0607 signifies a home blood glucose monitor, facilitating precise documentation and reimbursement processes.</div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </div>
)

export const priorDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
      <div>
        <p>
          Prior authorization is a crucial process in the healthcare industry, ensuring that medical services and treatments are both necessary and covered by insurance. It involves obtaining approval from the insurance provider before specific treatments, procedures, or medications are delivered. This process can prevent unnecessary costs and ensure adherence to medical guidelines. 
        </p>
      </div>
      {/* Accordions */}
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
    </div>
  );
  

  export const revengeDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
      <div>
        <p>
          Revenge spending is a term that has gained popularity in recent times, referring to the act of splurging on purchases or experiences to compensate for previous periods of restraint or lack of spending opportunities. Often fueled by emotions, it represents a psychological response to regain a sense of control or satisfaction.
        </p>
      </div>
      {/* Accordions */}
      <div className="px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-darkblue">What is revenge spending?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Revenge spending is the practice of indulging in extravagant purchases or experiences after a period of financial restriction or deprivation, often as a way to make up for lost time or opportunities.
              </div>
              <div>
                Examples include spending on luxury goods, expensive vacations, or dining out excessively after a phase of limited expenditures.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-darkblue">What drives revenge spending?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Emotional factors like frustration, boredom, or the desire for self-reward often drive revenge spending. Social influences, such as comparison with peers or societal trends, also play a role.
              </div>
              <div>
                Events like post-pandemic recovery have been significant triggers for this behavior globally.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-darkblue">What are the risks of revenge spending?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                While revenge spending can provide temporary satisfaction, it may lead to financial strain, debt, or buyer’s remorse if not managed carefully.
              </div>
              <div>
                It is essential to balance emotional impulses with financial responsibility to avoid long-term consequences.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-darkblue">How to approach revenge spending responsibly?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-lightblue">
              <div>
                Setting a budget and prioritizing meaningful purchases can help mitigate the risks of overindulgence. Awareness of emotional triggers is also crucial.
              </div>
              <div>
                Consider channeling funds into experiences or investments that align with long-term goals, rather than fleeting desires.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
  

export const specialitiesData = [
    {
        id: 1,
        title: 'Durable Medical Equipment',
        description: 'Efficient and accurate billing solutions tailored for durable medical equipment providers.',
        points: dmePoints,
        content: dmeDetail
    },
    {
        id: 2,
        title: 'Prior Authorization',
        description: 'Streamlined authorization processes to ensure timely approvals for medical services and equipment.',
        points: priorAuthorizationPoints,
        content: priorDetail
    },
    {
        id: 3,
        title: 'Revenue Cycle Management',
        description: 'Comprehensive solutions to optimize cash flow and simplify healthcare financial operations.',
        points: revenueCycleManagementPoints,
        content: revengeDetail
    },
];
