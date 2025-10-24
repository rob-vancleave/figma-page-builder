import svgPaths from "./svg-24evdjslmf";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#061b38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#061b38] w-full" data-name="Content">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.2] relative shrink-0 text-[52px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Medium length section heading goes here
      </p>
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[768px]" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function IconRelume() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon / Relume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon / Relume">
          <path clipRule="evenodd" d={svgPaths.p29729300} fill="var(--fill-0, #082233)" fillOpacity="0.8" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <IconRelume />
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#061b38] text-[32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Medium length section heading goes here
      </p>
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#061b38] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      {[...Array(3).keys()].map((_, i) => (
        <Column key={i} />
      ))}
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(41,181,232,0.8)] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[11px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#061b38] text-[16px] text-nowrap whitespace-pre">{`Primary Button LG `}</p>
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / chevron-right">
          <path d={svgPaths.p15d49700} fill="var(--fill-0, #082233)" fillOpacity="0.8" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#061b38] text-[16px] text-nowrap whitespace-pre">Button</p>
      <IconChevronRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-[#e6e8e6] relative size-full" data-name="Layout / 241 /">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-[64px] py-[112px] relative size-full">
          <SectionTitle />
          <Row />
          <Actions />
        </div>
      </div>
    </div>
  );
}