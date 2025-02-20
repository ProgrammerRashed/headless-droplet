"use client";
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const RenderHtmlHelper = ({ htmlContent }) => {
  const [cleanHTML, setCleanHTML] = useState('');

  useEffect(() => {
    if (htmlContent) {
      const sanitizedHTML = DOMPurify.sanitize(htmlContent);
      setCleanHTML(sanitizedHTML);
    }
  }, [htmlContent]);

  return (
    <>
      {cleanHTML && parse(cleanHTML)}
    </>
  );
};

export default RenderHtmlHelper;