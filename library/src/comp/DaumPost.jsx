import React, { useState } from 'react';
import { useKakaoPostcodePopup } from 'react-daum-postcode';

const DaumPost = () => {
  const [address, setAddress] = useState({a:'',z:''});

  const open = useKakaoPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    
    setAddress({'a':fullAddress, 'z':data.zonecode});
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
        <input type="text" placeholder='주소' value={address.a}/><br/>
        <input type="text" placeholder='상세주소'/><br/>
        <input type="text" placeholder='우편번호' value={address.z}/><br/>

        <button type='button' onClick={handleClick}>
        Open
        </button>
    </>
  );
};

export default DaumPost;