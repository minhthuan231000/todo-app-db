import React from 'react';
import Banner from '../../../../components/Banner';
import Images from './../../../../constants/images';

function MainPage(props) {
    return (
        <div style={{fontSize: '5rem'}}>
            <Banner title="Homepage - Thing to do 😎" backgroundUrl={Images.BANNER2} />
        </div>
    );
}

export default MainPage;