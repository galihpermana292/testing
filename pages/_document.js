/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Html, Head, Main, NextScript } from 'next/document';

// const MyDocument = () => {
// 	return (
// 		<html>
// 			<Head>
// 				<meta
// 					name="viewport"
// 					content="width=device-width, initial-scale=1"
// 				/>
// 			</Head>
// 			<body>
// 				<Main />
// 				<NextScript />
// 			</body>
// 		</html>
// 	);
// };

// MyDocument.getInitialProps = async () => {
//    return {};
// }
// export default MyDocument;
export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
