import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../compoents/Button';

function Buttonpage() {
    const handleClick = () => {
        console.log('Click!!');
    };

    return (
        <div>
            <div>
                <Button
                    secondary
                    outline
                    rounded
                    onClick={handleClick}
                    className="mb-5">
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default Buttonpage
