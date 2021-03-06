import { useState } from 'react';
import { StyledAuthor } from "./styles/Author.styled";
import Share from "./Share";
import Michelle from "../images/avatar-michelle.jpg";
 
const Author = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
    <StyledAuthor>
          <img className="author-img" src={Michelle} alt="Michelle" />
          <div className="author-details">
            <h2 className="author-name">Michelle Appleton</h2>
            <span className="date">28 Jun 2020</span>
          </div>
          <button aria-label="Share" id="toggle-share-options">
            {!isOpen && 
              <svg id="share-options-closed" onClick={(e) => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
              }
            {isOpen &&
              <svg id="share-options-opened" onClick={(e) => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#ecf2f8" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
              }
          </button>
    </StyledAuthor>
    
    {isOpen && <Share onChange={(status) => setIsOpen(status)} />}
    
    </>
  )
}

export default Author