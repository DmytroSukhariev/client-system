import React from "react";

const BrandInfo : React.FC = () => {
    return (
        <fieldset className="content__block">
            <legend className="content__title">Бренд Lorem ipsum</legend>
            <div className="content__inner">
                <div className="content__point content__point_full">
                    <div className="content__label">Описание бренда</div>
                    <p className="content__value">Cras sed sem dictum, viverra sapien vel, ornare nunc.
                        Nulla dictum interdum mauris ac semper.
                        Vivamus posuere enim a sem elementum, sit amet blandit mauris tincidunt.
                        Nam consequat ex a viverra porta.
                        Mauris pellentesque dictum dui et scelerisque.
                        Integer sollicitudin tincidunt quam at tempus.
                        Quisque eget efficitur diam.
                        Donec luctus diam ut imperdiet consequat.</p>
                </div>
            </div>
        </fieldset>
    );
}

export default BrandInfo;