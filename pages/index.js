import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/site.css';

const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col margintopbottom">
						<h2>Dear Indah,</h2>
						<h6 className="margintopbottom20">
							Hi sayang, i just want to say thanks aja kok ke kamu, makasih
							yaaaa udah mau jd pacar aku yang ga ribet, ga banyak mau, ga
							banyak ngatur-ngatur, pokoknya kamu tu jos banget lahhhh,
							hahahahaha. Sayanggg, padahal aku cuma mau ngasih kaos sama botol
							doang, heboh banget ya pake website segala hahahahah. Gapapa deh,
							asal kamu tau aku bikin website ini pas baru bangun kamu telpon
							tadi pagi banget loh.
						</h6>
						<h6 className="margintopbottom20">
							Oh iya, you have to know that...
						</h6>
						<h6 className="margintopbottom20">
							You are so beautiful, pretty, cute, funny, andddddddddd lovely. Im
							so proud and happy for having you to be my gf and i will never let
							you go, xixixixixi. Gimana aku udah kaya vicky belum? udah ya?
							hahahahahaha.
						</h6>
						<h6 className="margintopbottom20">Last but not least...</h6>
						<div className="text-center my-5">
							<img src="/static/img1.png" width={'100%'} />

							<img src="/static/img2.png" width={'100%'} className="mt-4" />
						</div>
						<h1 className="mb-5">Trust me, i love you a tons</h1>
						<a href="https://wa.link/2y9sw7" className="mb-5" target={'_blank'}>
							Klik ini sayangggg
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// Home.getInitialProps = async (ctx) => {
//    const initialProps = await Document.getInitialProps(ctx)
//   return { ...initialProps, helmet: Helmet.renderStatic() }
// }

// Home.propTypes = {};
// Home.defaultProps = {};

export default Home;

//dibawah ini script latihan, clear interval, getInitialProps
// export default function Home({ times }) {
// console.log(times);
// const [time, setTime] = useState(times);

// untuk melakukan pembersihan interval ketika data yang baru berubah, kita perlu melakukan clearInterval.
// perhatikan bahwa dalam useEffect function yang kita pass sebagai argumen adalah effect yang akan dijalankan oleh react SETELAH COMPOENENT DI RENDER. ketika effect yang kita pass me-return sebuah function, maka proses cleanup akan dijalankan. sehingga kita bisa melakukan clearInterval dengan mereturn sebuah function.

// useEffect(() => {
// 	const interval = setInterval(
// 		() => setTime(new Date().toLocaleString()),
// 		1000
// 	);
// 	return () => {
// 		clearInterval(interval);
// 	};
// }, []);

// return (
// 	<>
//       <Link href="/halo">Go to Halo</Link>
// 		<h1 className={styles.title}>Hello world, {time} </h1>
// 	</>
// );
// }

// yang dilakukan get initial props adalah melakukan inisialisasi data awal yang dibutuhkan, lalu passing ke component datanya berupa object, dan menginject data ke file html yang nantinya di download oleh client. jadi tanggal ini awalnya akan di pass ke component (server rendering) setelah itu merender compoenent dan mengirimkan html ke client. saat mengirimkan html itu, getInitial melakukan penyisipan tanggal pada file html nya, sehingga ketika (client rendering), client akan mengambil data pada html yang sudah ada data dari getIntial itu, lalu di render. jadi tidak perlu melakukan eksekusi time lagi, kalo gaada get initial kan time akan di generate di server dan di client, hal itu bikin js nya ga syncron alias ada beda waktu. makanya kita butuh getInitialProps

// function ini akan ke eksekusi duluan, baru componentnya
// Home.getInitialProps = async () => {
// 	return { times: new Date().toLocaleTimeString() };
// };

// jika menggunakan class

// class Home extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			time: new Date().toLocaleString(),
// 		};
// 	}

// 	tick() {
// 		this.setState(() => {
// 			return {
// 				time: new Date().toLocaleString(),
// 			};
// 		});
// 	}

// 	componentDidMount() {
// 		this.interval = setInterval(() => this.tick(), 1000);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.interval);
// 	}

// 	render() {
// 		return (
// 			<h1>
// 				Hello From Pluralsight and React:
// 				{this.state.time}
// 			</h1>
// 		);
// 	}
// }

// export default Home;
