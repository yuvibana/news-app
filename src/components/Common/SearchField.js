import { useEffect, useState } from 'react';
import USerAvtar from '../../assets/images/user.png'

export default function SearchField({ searchPlaceholder, searchStringFunc }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <div className={scroll? 'appSearchHeader headerFixed':' appSearchHeader'}>
    {/* <div className={`appSearchHeader ${scroll}`}> */}
      <div className='container dflex alignItems justifyContent'>
        <div className='useravtardiv'>
          <img src={USerAvtar} alt={USerAvtar} />
        </div>
        <div className='SearchDiv'>
          <input type="text"
            onChange={(e) => searchStringFunc(e)}
            placeholder={searchPlaceholder}
          />
        </div>
      </div>
    </div>
  )
}


SearchField.defaultProps = {
  searchPlaceholder: "Search Here..."
}