import React, {Fragment, useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import serviceimg3 from '../Assets/serviceimg3.png'
function ServiceAccordian() {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
        <section className='container mx-auto px-5 lg-px-10 mb-10'>
            {/* image */}
            <div className='md:px-16 lg:px-28 mb-7'>
                <img src={serviceimg3} alt="" />
            </div>
            {/* text & Accordian */}
            <div className='flex flex-col md:flex-row gap-8 items-start justify-between md:px-16 lg:px-28'>
                <h1 className='text-3xl mb-5 md:mb-0 sticky lg:top-20'>We connect our customers with the best, and help them keep up and stay open.</h1>
                <div className='flex flex-col items-start'>
                <Fragment>
                    <Accordion open={open === 0} className='mb-3'>
                        <AccordionHeader className='text-left' onClick={() => handleOpen(1)}>
                        We connect our customers with the best.
                        </AccordionHeader>
                        <AccordionBody>
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className='mb-3'>
                        <AccordionHeader className='text-left' onClick={() => handleOpen(2)}>
                        All kind of Financial consultancy.
                        </AccordionHeader>
                        <AccordionBody>
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className='mb-3'>
                        <AccordionHeader className='text-left' onClick={() => handleOpen(3)}>
                        Have a look on our services
                        </AccordionHeader>
                        <AccordionBody>
                        We&apos;re not always in the position that we want to be at.
                        We&apos;re constantly growing. We&apos;re constantly making mistakes.
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceAccordian


 