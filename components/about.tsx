"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-7 sm:mb-18 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras
        adipiscing enim eu. Urna duis convallis convallis tellus id interdum
        velit. Semper auctor neque vitae tempus. Aliquam faucibus purus in
        massa. Duis convallis convallis tellus id. Maecenas accumsan lacus vel
        facilisis volutpat est velit egestas. Nunc mi ipsum faucibus vitae
        aliquet. Nisi quis eleifend quam adipiscing vitae. Faucibus in ornare
        quam viverra orci sagittis eu volutpat. Accumsan in nisl nisi
        scelerisque. Faucibus pulvinar elementum integer enim neque volutpat.
        Sodales ut eu sem integer vitae justo. Pretium vulputate sapien nec
        sagittis aliquam. At augue eget arcu dictum varius duis at. Arcu ac
        tortor dignissim convallis aenean. Nibh ipsum consequat nisl vel pretium
        lectus quam id leo. Massa sed elementum tempus egestas sed.
      </p>
      <p className="mb-3">
        A arcu cursus vitae congue mauris rhoncus. Faucibus turpis in eu mi
        bibendum. Praesent tristique magna sit amet purus gravida quis blandit
        turpis. Vel turpis nunc eget lorem dolor sed viverra ipsum. Tellus
        elementum sagittis vitae et. Arcu vitae elementum curabitur vitae nunc
        sed velit dignissim. Aenean euismod elementum nisi quis eleifend quam
        adipiscing. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices
        dui. Egestas pretium aenean pharetra magna ac placerat vestibulum
        lectus. Elementum pulvinar etiam non quam lacus suspendisse faucibus
        interdum posuere. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Nec sagittis aliquam malesuada bibendum arcu vitae
        elementum curabitur. Nulla malesuada pellentesque elit eget. Vulputate
        enim nulla aliquet porttitor lacus. Integer enim neque volutpat ac
        tincidunt vitae semper quis. Aliquet bibendum enim facilisis gravida.
        Nibh praesent tristique magna sit amet purus gravida quis blandit.
      </p>
    </motion.section>
  );
}
