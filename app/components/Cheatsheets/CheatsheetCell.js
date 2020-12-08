import React, {useState} from 'react';
import ReactPlayer from "react-player"
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';
import { Document, Page } from 'react-pdf';



function CheatsheetCell({ cheatsheets }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  }
  return (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={cheatsheets.link}>{cheatsheets.title}</a></h3>
        
      </header>
     
    </article>
  </div>
  );
}
// <Document
// file={cheatsheets.image}
// options={{workerSrc: "pdf.worker.js"}}
// onLoadSuccess={onDocumentLoadSuccess}

// >

// <Page pageNumber={1} />  
// <p>Page 1 of {numPages}</p>
// <Page pageNumber={2} />  
// <p>Page 2 of {numPages}</p>
// </Document>
CheatsheetCell.propTypes = {
  cheatsheets: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
   
  }).isRequired,
};

export default CheatsheetCell;
