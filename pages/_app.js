import 'jquery/dist/jquery.min.js'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootswatch/dist/spacelab/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
