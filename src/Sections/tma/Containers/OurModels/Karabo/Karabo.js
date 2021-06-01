import React from 'react';
import { Helmet } from 'react-helmet';

import ImageSlider from '../../../../../Components/ImageSlider/ImageSlider';

const karabo = () => {
    return (
        <div id="our-models" className="text-center">
            <Helmet>
                <title>Karabo Sefatsa</title>
            </Helmet>
            <h2>
                Our Models
            </h2>
            <ImageSlider images={[
                                'img/Karabo/IMG_8578.jpg',
                                'img/Karabo/IMG_8586nw.jpg',
                                'img/Karabo/IMG_8601.jpg',
                                'img/Karabo/karabo.jpg'
                            ]}/>
    </div>
    )
}

export default karabo;