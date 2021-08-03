import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { isImageItem } from '../../lib/helper';

export function BottomView({ items }) {
    return (
        <div className="bottom-view">
            <marquee>
                {
                    items.filter(isImageItem).map(item => (
                        <div className="item" key={item.id}>
                            <img src={item.src} />
                        </div>
                    ))
                }
            </marquee>
        </div>
    )
}