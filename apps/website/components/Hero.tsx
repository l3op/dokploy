"use client";
import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Button } from "./ui/button";

const ProductHunt = () => {
	return (
		<Link
			href="https://www.producthunt.com/posts/dokploy"
			target="_blank"
			className="relative opacity-70 hover:opacity-100"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="154.881"
				height="35"
				viewBox="0 0 122.881 29"
			>
				<g fill="none">
					<path
						d="M28.744 14.372c0 7.937 -6.435 14.372 -14.372 14.372C6.434 28.744 0 22.309 0 14.372 0 6.434 6.435 0 14.372 0c7.937 0 14.372 6.435 14.372 14.372"
						fill="#DA552F"
					/>
					<path
						d="M16.288 14.372h-4.072v-4.312h4.072a2.156 2.156 0 1 1 0 4.312m0 -7.186H9.342v14.372h2.874v-4.312h4.072c2.778 0 5.03 -2.252 5.03 -5.03S19.066 7.186 16.288 7.186"
						fill="#FFF"
					/>
					<path
						d="M43.842 12.615c0 -0.791 -0.608 -1.27 -1.397 -1.27H40.33v2.525h2.117c0.789 0 1.397 -0.479 1.397 -1.255zm-5.517 6.547V9.581h4.402c2.047 0 3.16 1.383 3.16 3.034 0 1.637 -1.128 3.019 -3.16 3.019H40.33v3.528h-2.003zm8.782 0V12.178h1.791v0.917c0.494 -0.593 1.327 -1.086 2.174 -1.086v1.749c-0.128 -0.028 -0.283 -0.042 -0.494 -0.042 -0.593 0 -1.384 0.338 -1.68 0.777v4.67h-1.791zm9.993 -3.584c0 -1.058 -0.622 -1.975 -1.751 -1.975 -1.115 0 -1.735 0.917 -1.735 1.976 0 1.072 0.62 1.989 1.735 1.989 1.129 0 1.75 -0.917 1.75 -1.99m-5.349 0c0 -1.933 1.355 -3.57 3.598 -3.57 2.258 0 3.613 1.637 3.613 3.57s-1.355 3.584 -3.613 3.584c-2.244 0 -3.598 -1.651 -3.598 -3.584m13.241 1.214v-2.413c-0.296 -0.452 -0.945 -0.776 -1.538 -0.776 -1.029 0 -1.735 0.804 -1.735 1.976 0 1.185 0.706 1.989 1.735 1.989 0.593 0 1.242 -0.324 1.538 -0.777zm0 2.371v-1.044c-0.537 0.677 -1.27 1.044 -2.103 1.044 -1.707 0 -3.019 -1.298 -3.019 -3.584 0 -2.215 1.284 -3.57 3.019 -3.57 0.804 0 1.566 0.339 2.103 1.044v-3.471h1.806v9.581zm8.189 0V18.132c-0.465 0.508 -1.283 1.03 -2.399 1.03 -1.495 0 -2.201 -0.818 -2.201 -2.145v-4.84h1.791v4.135c0 0.946 0.494 1.256 1.256 1.256 0.691 0 1.242 -0.381 1.552 -0.777v-4.614h1.792v6.985zm3.138 -3.584c0 -2.088 1.524 -3.57 3.613 -3.57 1.397 0 2.243 0.607 2.695 1.228l-1.172 1.1c-0.324 -0.48 -0.818 -0.733 -1.439 -0.733 -1.087 0 -1.848 0.79 -1.848 1.976 0 1.185 0.761 1.989 1.848 1.989 0.621 0 1.115 -0.282 1.439 -0.748l1.172 1.101c-0.452 0.621 -1.298 1.242 -2.695 1.242 -2.089 0 -3.613 -1.481 -3.613 -3.584m7.849 1.708v-3.542h-1.129v-1.566h1.129v-1.863h1.793v1.863h1.382v1.566h-1.382v3.062c0 0.437 0.225 0.762 0.62 0.762 0.267 0 0.523 -0.099 0.62 -0.211l0.382 1.368c-0.268 0.241 -0.748 0.438 -1.496 0.438 -1.256 0 -1.919 -0.649 -1.919 -1.877m14.653 1.877v-4.135h-4.445v4.135h-2.002V9.581h2.002v3.697h4.445v-3.696h2.018v9.581zm8.431 0V18.132c-0.465 0.508 -1.284 1.03 -2.399 1.03 -1.496 0 -2.201 -0.818 -2.201 -2.145v-4.84h1.791v4.135c0 0.946 0.494 1.256 1.256 1.256 0.691 0 1.242 -0.381 1.552 -0.777v-4.614h1.792v6.985zm8.173 0V14.874c0 -0.946 -0.493 -1.27 -1.255 -1.27 -0.705 0 -1.241 0.395 -1.552 0.79v4.769h-1.791V12.178h1.791v0.875c0.438 -0.508 1.284 -1.044 2.385 -1.044 1.51 0 2.23 0.846 2.23 2.173v4.982zm3.942 -1.877v-3.542h-1.128v-1.566h1.128v-1.863h1.793v1.863h1.382v1.566h-1.382v3.062c0 0.437 0.225 0.762 0.62 0.762 0.268 0 0.523 -0.099 0.621 -0.211l0.38 1.368c-0.267 0.241 -0.748 0.438 -1.496 0.438 -1.256 0 -1.919 -0.649 -1.919 -1.877"
						fill="#DA552F"
					/>
				</g>
			</svg>
		</Link>
	);
};

export function Hero() {
	const t = useTranslations("HomePage");
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsCopied(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [isCopied]);
	return (
		<Container className="bg-black pb-16 pt-20 text-center lg:pt-32">
			<div className="absolute inset-0">
				<svg viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg">
					<mask id="b" x="0" y="0" width="2000" height="1000">
						<path fill="url(#a)" d="M0 0h2000v1000H0z" />
					</mask>
					<path d="M0 0h2000v1000H0z" />
					<g stroke="#22222233" strokeWidth=".4" fill="none" mask="url(#b)">
						<path d="M0 0h50v50H0zM50 0h50v50H50zM100 0h50v50h-50zM150 0h50v50h-50zM200 0h50v50h-50zM250 0h50v50h-50zM300 0h50v50h-50zM350 0h50v50h-50zM400 0h50v50h-50zM450 0h50v50h-50zM500 0h50v50h-50zM550 0h50v50h-50zM600 0h50v50h-50zM650 0h50v50h-50zM700 0h50v50h-50zM750 0h50v50h-50zM800 0h50v50h-50zM850 0h50v50h-50zM900 0h50v50h-50zM950 0h50v50h-50zM1000 0h50v50h-50zM1050 0h50v50h-50zM1100 0h50v50h-50zM1150 0h50v50h-50zM1200 0h50v50h-50zM1250 0h50v50h-50zM1300 0h50v50h-50zM1350 0h50v50h-50zM1400 0h50v50h-50zM1450 0h50v50h-50zM1500 0h50v50h-50zM1550 0h50v50h-50zM1600 0h50v50h-50zM1650 0h50v50h-50zM1700 0h50v50h-50zM1750 0h50v50h-50zM1800 0h50v50h-50zM1850 0h50v50h-50zM1900 0h50v50h-50zM1950 0h50v50h-50zM0 50h50v50H0zM50 50h50v50H50zM100 50h50v50h-50zM150 50h50v50h-50zM200 50h50v50h-50zM250 50h50v50h-50zM300 50h50v50h-50zM350 50h50v50h-50zM400 50h50v50h-50zM450 50h50v50h-50zM500 50h50v50h-50zM550 50h50v50h-50zM600 50h50v50h-50zM650 50h50v50h-50zM700 50h50v50h-50zM750 50h50v50h-50zM800 50h50v50h-50zM850 50h50v50h-50zM900 50h50v50h-50zM950 50h50v50h-50zM1000 50h50v50h-50zM1050 50h50v50h-50zM1100 50h50v50h-50zM1150 50h50v50h-50zM1200 50h50v50h-50zM1250 50h50v50h-50zM1300 50h50v50h-50zM1350 50h50v50h-50zM1400 50h50v50h-50zM1450 50h50v50h-50zM1500 50h50v50h-50zM1550 50h50v50h-50zM1600 50h50v50h-50zM1650 50h50v50h-50zM1700 50h50v50h-50zM1750 50h50v50h-50zM1800 50h50v50h-50zM1850 50h50v50h-50zM1900 50h50v50h-50zM1950 50h50v50h-50zM0 100h50v50H0zM50 100h50v50H50zM100 100h50v50h-50zM150 100h50v50h-50zM200 100h50v50h-50zM250 100h50v50h-50zM300 100h50v50h-50zM350 100h50v50h-50zM400 100h50v50h-50zM450 100h50v50h-50zM500 100h50v50h-50zM550 100h50v50h-50zM600 100h50v50h-50zM650 100h50v50h-50zM700 100h50v50h-50zM750 100h50v50h-50zM800 100h50v50h-50zM850 100h50v50h-50zM900 100h50v50h-50zM950 100h50v50h-50zM1000 100h50v50h-50zM1050 100h50v50h-50zM1100 100h50v50h-50zM1150 100h50v50h-50zM1200 100h50v50h-50zM1250 100h50v50h-50zM1300 100h50v50h-50zM1350 100h50v50h-50zM1400 100h50v50h-50zM1450 100h50v50h-50zM1500 100h50v50h-50zM1550 100h50v50h-50zM1600 100h50v50h-50zM1650 100h50v50h-50zM1700 100h50v50h-50zM1750 100h50v50h-50zM1800 100h50v50h-50zM1850 100h50v50h-50zM1900 100h50v50h-50zM1950 100h50v50h-50zM0 150h50v50H0zM50 150h50v50H50zM100 150h50v50h-50zM150 150h50v50h-50zM200 150h50v50h-50zM250 150h50v50h-50zM300 150h50v50h-50zM350 150h50v50h-50zM400 150h50v50h-50zM450 150h50v50h-50zM500 150h50v50h-50zM550 150h50v50h-50zM600 150h50v50h-50zM650 150h50v50h-50zM700 150h50v50h-50zM750 150h50v50h-50zM800 150h50v50h-50zM850 150h50v50h-50zM900 150h50v50h-50zM950 150h50v50h-50zM1000 150h50v50h-50zM1050 150h50v50h-50zM1100 150h50v50h-50zM1150 150h50v50h-50zM1200 150h50v50h-50zM1250 150h50v50h-50zM1300 150h50v50h-50zM1350 150h50v50h-50zM1400 150h50v50h-50zM1450 150h50v50h-50zM1500 150h50v50h-50zM1550 150h50v50h-50zM1600 150h50v50h-50zM1650 150h50v50h-50zM1700 150h50v50h-50zM1750 150h50v50h-50zM1800 150h50v50h-50zM1850 150h50v50h-50zM1900 150h50v50h-50zM1950 150h50v50h-50zM0 200h50v50H0zM50 200h50v50H50zM100 200h50v50h-50zM150 200h50v50h-50zM200 200h50v50h-50zM250 200h50v50h-50zM300 200h50v50h-50zM350 200h50v50h-50zM400 200h50v50h-50zM450 200h50v50h-50zM500 200h50v50h-50zM550 200h50v50h-50zM600 200h50v50h-50zM650 200h50v50h-50zM700 200h50v50h-50zM750 200h50v50h-50zM800 200h50v50h-50zM850 200h50v50h-50zM900 200h50v50h-50zM950 200h50v50h-50zM1000 200h50v50h-50zM1050 200h50v50h-50zM1100 200h50v50h-50zM1150 200h50v50h-50zM1200 200h50v50h-50zM1250 200h50v50h-50zM1300 200h50v50h-50zM1350 200h50v50h-50zM1400 200h50v50h-50zM1450 200h50v50h-50zM1500 200h50v50h-50zM1550 200h50v50h-50zM1600 200h50v50h-50zM1650 200h50v50h-50zM1700 200h50v50h-50zM1750 200h50v50h-50zM1800 200h50v50h-50zM1850 200h50v50h-50zM1900 200h50v50h-50zM1950 200h50v50h-50zM0 250h50v50H0zM50 250h50v50H50zM100 250h50v50h-50zM150 250h50v50h-50zM200 250h50v50h-50zM250 250h50v50h-50zM300 250h50v50h-50zM350 250h50v50h-50zM400 250h50v50h-50zM450 250h50v50h-50zM500 250h50v50h-50zM550 250h50v50h-50zM600 250h50v50h-50zM650 250h50v50h-50zM700 250h50v50h-50zM750 250h50v50h-50zM800 250h50v50h-50zM850 250h50v50h-50zM900 250h50v50h-50zM950 250h50v50h-50zM1000 250h50v50h-50zM1050 250h50v50h-50zM1100 250h50v50h-50zM1150 250h50v50h-50zM1200 250h50v50h-50zM1250 250h50v50h-50zM1300 250h50v50h-50zM1350 250h50v50h-50zM1400 250h50v50h-50zM1450 250h50v50h-50zM1500 250h50v50h-50zM1550 250h50v50h-50zM1600 250h50v50h-50zM1650 250h50v50h-50zM1700 250h50v50h-50zM1750 250h50v50h-50zM1800 250h50v50h-50zM1850 250h50v50h-50zM1900 250h50v50h-50zM1950 250h50v50h-50zM0 300h50v50H0zM50 300h50v50H50zM100 300h50v50h-50zM150 300h50v50h-50zM200 300h50v50h-50zM250 300h50v50h-50zM300 300h50v50h-50zM350 300h50v50h-50zM400 300h50v50h-50zM450 300h50v50h-50zM500 300h50v50h-50zM550 300h50v50h-50zM600 300h50v50h-50zM650 300h50v50h-50zM700 300h50v50h-50zM750 300h50v50h-50zM800 300h50v50h-50zM850 300h50v50h-50zM900 300h50v50h-50zM950 300h50v50h-50zM1000 300h50v50h-50zM1050 300h50v50h-50zM1100 300h50v50h-50zM1150 300h50v50h-50zM1200 300h50v50h-50zM1250 300h50v50h-50zM1300 300h50v50h-50zM1350 300h50v50h-50zM1400 300h50v50h-50zM1450 300h50v50h-50zM1500 300h50v50h-50zM1550 300h50v50h-50zM1600 300h50v50h-50zM1650 300h50v50h-50zM1700 300h50v50h-50zM1750 300h50v50h-50zM1800 300h50v50h-50zM1850 300h50v50h-50zM1900 300h50v50h-50zM1950 300h50v50h-50zM0 350h50v50H0zM50 350h50v50H50zM100 350h50v50h-50zM150 350h50v50h-50zM200 350h50v50h-50zM250 350h50v50h-50zM300 350h50v50h-50zM350 350h50v50h-50zM400 350h50v50h-50zM450 350h50v50h-50zM500 350h50v50h-50zM550 350h50v50h-50zM600 350h50v50h-50zM650 350h50v50h-50zM700 350h50v50h-50zM750 350h50v50h-50zM800 350h50v50h-50zM850 350h50v50h-50zM900 350h50v50h-50zM950 350h50v50h-50zM1000 350h50v50h-50zM1050 350h50v50h-50zM1100 350h50v50h-50zM1150 350h50v50h-50zM1200 350h50v50h-50zM1250 350h50v50h-50zM1300 350h50v50h-50zM1350 350h50v50h-50zM1400 350h50v50h-50zM1450 350h50v50h-50zM1500 350h50v50h-50zM1550 350h50v50h-50zM1600 350h50v50h-50zM1650 350h50v50h-50zM1700 350h50v50h-50zM1750 350h50v50h-50zM1800 350h50v50h-50zM1850 350h50v50h-50zM1900 350h50v50h-50zM1950 350h50v50h-50zM0 400h50v50H0zM50 400h50v50H50zM100 400h50v50h-50zM150 400h50v50h-50zM200 400h50v50h-50zM250 400h50v50h-50zM300 400h50v50h-50zM350 400h50v50h-50zM400 400h50v50h-50zM450 400h50v50h-50zM500 400h50v50h-50zM550 400h50v50h-50zM600 400h50v50h-50zM650 400h50v50h-50zM700 400h50v50h-50zM750 400h50v50h-50zM800 400h50v50h-50zM850 400h50v50h-50zM900 400h50v50h-50zM950 400h50v50h-50zM1000 400h50v50h-50zM1050 400h50v50h-50zM1100 400h50v50h-50zM1150 400h50v50h-50zM1200 400h50v50h-50zM1250 400h50v50h-50zM1300 400h50v50h-50zM1350 400h50v50h-50zM1400 400h50v50h-50zM1450 400h50v50h-50zM1500 400h50v50h-50zM1550 400h50v50h-50zM1600 400h50v50h-50zM1650 400h50v50h-50zM1700 400h50v50h-50zM1750 400h50v50h-50zM1800 400h50v50h-50zM1850 400h50v50h-50zM1900 400h50v50h-50zM1950 400h50v50h-50zM0 450h50v50H0zM50 450h50v50H50zM100 450h50v50h-50zM150 450h50v50h-50zM200 450h50v50h-50zM250 450h50v50h-50zM300 450h50v50h-50zM350 450h50v50h-50zM400 450h50v50h-50zM450 450h50v50h-50zM500 450h50v50h-50zM550 450h50v50h-50zM600 450h50v50h-50zM650 450h50v50h-50zM700 450h50v50h-50zM750 450h50v50h-50zM800 450h50v50h-50zM850 450h50v50h-50zM900 450h50v50h-50zM950 450h50v50h-50zM1000 450h50v50h-50zM1050 450h50v50h-50zM1100 450h50v50h-50zM1150 450h50v50h-50zM1200 450h50v50h-50zM1250 450h50v50h-50zM1300 450h50v50h-50zM1350 450h50v50h-50zM1400 450h50v50h-50zM1450 450h50v50h-50zM1500 450h50v50h-50zM1550 450h50v50h-50zM1600 450h50v50h-50zM1650 450h50v50h-50zM1700 450h50v50h-50zM1750 450h50v50h-50zM1800 450h50v50h-50zM1850 450h50v50h-50zM1900 450h50v50h-50zM1950 450h50v50h-50zM0 500h50v50H0zM50 500h50v50H50zM100 500h50v50h-50zM150 500h50v50h-50zM200 500h50v50h-50zM250 500h50v50h-50zM300 500h50v50h-50zM350 500h50v50h-50zM400 500h50v50h-50zM450 500h50v50h-50zM500 500h50v50h-50zM550 500h50v50h-50zM600 500h50v50h-50zM650 500h50v50h-50zM700 500h50v50h-50zM750 500h50v50h-50zM800 500h50v50h-50zM850 500h50v50h-50zM900 500h50v50h-50zM950 500h50v50h-50zM1000 500h50v50h-50zM1050 500h50v50h-50zM1100 500h50v50h-50zM1150 500h50v50h-50zM1200 500h50v50h-50zM1250 500h50v50h-50zM1300 500h50v50h-50zM1350 500h50v50h-50zM1400 500h50v50h-50zM1450 500h50v50h-50zM1500 500h50v50h-50zM1550 500h50v50h-50zM1600 500h50v50h-50zM1650 500h50v50h-50zM1700 500h50v50h-50zM1750 500h50v50h-50zM1800 500h50v50h-50zM1850 500h50v50h-50zM1900 500h50v50h-50zM1950 500h50v50h-50zM0 550h50v50H0zM50 550h50v50H50zM100 550h50v50h-50zM150 550h50v50h-50zM200 550h50v50h-50zM250 550h50v50h-50zM300 550h50v50h-50zM350 550h50v50h-50zM400 550h50v50h-50zM450 550h50v50h-50zM500 550h50v50h-50zM550 550h50v50h-50zM600 550h50v50h-50zM650 550h50v50h-50zM700 550h50v50h-50zM750 550h50v50h-50zM800 550h50v50h-50zM850 550h50v50h-50zM900 550h50v50h-50zM950 550h50v50h-50zM1000 550h50v50h-50zM1050 550h50v50h-50zM1100 550h50v50h-50zM1150 550h50v50h-50zM1200 550h50v50h-50zM1250 550h50v50h-50zM1300 550h50v50h-50zM1350 550h50v50h-50zM1400 550h50v50h-50zM1450 550h50v50h-50zM1500 550h50v50h-50zM1550 550h50v50h-50zM1600 550h50v50h-50zM1650 550h50v50h-50zM1700 550h50v50h-50zM1750 550h50v50h-50zM1800 550h50v50h-50zM1850 550h50v50h-50zM1900 550h50v50h-50zM1950 550h50v50h-50zM0 600h50v50H0zM50 600h50v50H50zM100 600h50v50h-50zM150 600h50v50h-50zM200 600h50v50h-50zM250 600h50v50h-50zM300 600h50v50h-50zM350 600h50v50h-50zM400 600h50v50h-50zM450 600h50v50h-50zM500 600h50v50h-50zM550 600h50v50h-50zM600 600h50v50h-50zM650 600h50v50h-50zM700 600h50v50h-50zM750 600h50v50h-50zM800 600h50v50h-50zM850 600h50v50h-50zM900 600h50v50h-50zM950 600h50v50h-50zM1000 600h50v50h-50zM1050 600h50v50h-50zM1100 600h50v50h-50zM1150 600h50v50h-50zM1200 600h50v50h-50zM1250 600h50v50h-50zM1300 600h50v50h-50zM1350 600h50v50h-50zM1400 600h50v50h-50zM1450 600h50v50h-50zM1500 600h50v50h-50zM1550 600h50v50h-50zM1600 600h50v50h-50zM1650 600h50v50h-50zM1700 600h50v50h-50zM1750 600h50v50h-50zM1800 600h50v50h-50zM1850 600h50v50h-50zM1900 600h50v50h-50zM1950 600h50v50h-50zM0 650h50v50H0zM50 650h50v50H50zM100 650h50v50h-50zM150 650h50v50h-50zM200 650h50v50h-50zM250 650h50v50h-50zM300 650h50v50h-50zM350 650h50v50h-50zM400 650h50v50h-50zM450 650h50v50h-50zM500 650h50v50h-50zM550 650h50v50h-50zM600 650h50v50h-50zM650 650h50v50h-50zM700 650h50v50h-50zM750 650h50v50h-50zM800 650h50v50h-50zM850 650h50v50h-50zM900 650h50v50h-50zM950 650h50v50h-50zM1000 650h50v50h-50zM1050 650h50v50h-50zM1100 650h50v50h-50zM1150 650h50v50h-50zM1200 650h50v50h-50zM1250 650h50v50h-50zM1300 650h50v50h-50zM1350 650h50v50h-50zM1400 650h50v50h-50zM1450 650h50v50h-50zM1500 650h50v50h-50zM1550 650h50v50h-50zM1600 650h50v50h-50zM1650 650h50v50h-50zM1700 650h50v50h-50zM1750 650h50v50h-50zM1800 650h50v50h-50zM1850 650h50v50h-50zM1900 650h50v50h-50zM1950 650h50v50h-50zM0 700h50v50H0zM50 700h50v50H50zM100 700h50v50h-50zM150 700h50v50h-50zM200 700h50v50h-50zM250 700h50v50h-50zM300 700h50v50h-50zM350 700h50v50h-50zM400 700h50v50h-50zM450 700h50v50h-50zM500 700h50v50h-50zM550 700h50v50h-50zM600 700h50v50h-50zM650 700h50v50h-50zM700 700h50v50h-50zM750 700h50v50h-50zM800 700h50v50h-50zM850 700h50v50h-50zM900 700h50v50h-50zM950 700h50v50h-50zM1000 700h50v50h-50zM1050 700h50v50h-50zM1100 700h50v50h-50zM1150 700h50v50h-50zM1200 700h50v50h-50zM1250 700h50v50h-50zM1300 700h50v50h-50zM1350 700h50v50h-50zM1400 700h50v50h-50zM1450 700h50v50h-50zM1500 700h50v50h-50zM1550 700h50v50h-50zM1600 700h50v50h-50zM1650 700h50v50h-50zM1700 700h50v50h-50zM1750 700h50v50h-50zM1800 700h50v50h-50zM1850 700h50v50h-50zM1900 700h50v50h-50zM1950 700h50v50h-50zM0 750h50v50H0zM50 750h50v50H50zM100 750h50v50h-50zM150 750h50v50h-50zM200 750h50v50h-50zM250 750h50v50h-50zM300 750h50v50h-50zM350 750h50v50h-50zM400 750h50v50h-50zM450 750h50v50h-50zM500 750h50v50h-50zM550 750h50v50h-50zM600 750h50v50h-50zM650 750h50v50h-50zM700 750h50v50h-50zM750 750h50v50h-50zM800 750h50v50h-50zM850 750h50v50h-50zM900 750h50v50h-50zM950 750h50v50h-50zM1000 750h50v50h-50zM1050 750h50v50h-50zM1100 750h50v50h-50zM1150 750h50v50h-50zM1200 750h50v50h-50zM1250 750h50v50h-50zM1300 750h50v50h-50zM1350 750h50v50h-50zM1400 750h50v50h-50zM1450 750h50v50h-50zM1500 750h50v50h-50zM1550 750h50v50h-50zM1600 750h50v50h-50zM1650 750h50v50h-50zM1700 750h50v50h-50zM1750 750h50v50h-50zM1800 750h50v50h-50zM1850 750h50v50h-50zM1900 750h50v50h-50zM1950 750h50v50h-50zM0 800h50v50H0zM50 800h50v50H50zM100 800h50v50h-50zM150 800h50v50h-50zM200 800h50v50h-50zM250 800h50v50h-50zM300 800h50v50h-50zM350 800h50v50h-50zM400 800h50v50h-50zM450 800h50v50h-50zM500 800h50v50h-50zM550 800h50v50h-50zM600 800h50v50h-50zM650 800h50v50h-50zM700 800h50v50h-50zM750 800h50v50h-50zM800 800h50v50h-50zM850 800h50v50h-50zM900 800h50v50h-50zM950 800h50v50h-50zM1000 800h50v50h-50zM1050 800h50v50h-50zM1100 800h50v50h-50zM1150 800h50v50h-50zM1200 800h50v50h-50zM1250 800h50v50h-50zM1300 800h50v50h-50zM1350 800h50v50h-50zM1400 800h50v50h-50zM1450 800h50v50h-50zM1500 800h50v50h-50zM1550 800h50v50h-50zM1600 800h50v50h-50zM1650 800h50v50h-50zM1700 800h50v50h-50zM1750 800h50v50h-50zM1800 800h50v50h-50zM1850 800h50v50h-50zM1900 800h50v50h-50zM1950 800h50v50h-50zM0 850h50v50H0zM50 850h50v50H50zM100 850h50v50h-50zM150 850h50v50h-50zM200 850h50v50h-50zM250 850h50v50h-50zM300 850h50v50h-50zM350 850h50v50h-50zM400 850h50v50h-50zM450 850h50v50h-50zM500 850h50v50h-50zM550 850h50v50h-50zM600 850h50v50h-50zM650 850h50v50h-50zM700 850h50v50h-50zM750 850h50v50h-50zM800 850h50v50h-50zM850 850h50v50h-50zM900 850h50v50h-50zM950 850h50v50h-50zM1000 850h50v50h-50zM1050 850h50v50h-50zM1100 850h50v50h-50zM1150 850h50v50h-50zM1200 850h50v50h-50zM1250 850h50v50h-50zM1300 850h50v50h-50zM1350 850h50v50h-50zM1400 850h50v50h-50zM1450 850h50v50h-50zM1500 850h50v50h-50zM1550 850h50v50h-50zM1600 850h50v50h-50zM1650 850h50v50h-50zM1700 850h50v50h-50zM1750 850h50v50h-50zM1800 850h50v50h-50zM1850 850h50v50h-50zM1900 850h50v50h-50zM1950 850h50v50h-50zM0 900h50v50H0zM50 900h50v50H50zM100 900h50v50h-50zM150 900h50v50h-50zM200 900h50v50h-50zM250 900h50v50h-50zM300 900h50v50h-50zM350 900h50v50h-50zM400 900h50v50h-50zM450 900h50v50h-50zM500 900h50v50h-50zM550 900h50v50h-50zM600 900h50v50h-50zM650 900h50v50h-50zM700 900h50v50h-50zM750 900h50v50h-50zM800 900h50v50h-50zM850 900h50v50h-50zM900 900h50v50h-50zM950 900h50v50h-50zM1000 900h50v50h-50zM1050 900h50v50h-50zM1100 900h50v50h-50zM1150 900h50v50h-50zM1200 900h50v50h-50zM1250 900h50v50h-50zM1300 900h50v50h-50zM1350 900h50v50h-50zM1400 900h50v50h-50zM1450 900h50v50h-50zM1500 900h50v50h-50zM1550 900h50v50h-50zM1600 900h50v50h-50zM1650 900h50v50h-50zM1700 900h50v50h-50zM1750 900h50v50h-50zM1800 900h50v50h-50zM1850 900h50v50h-50zM1900 900h50v50h-50zM1950 900h50v50h-50zM0 950h50v50H0zM50 950h50v50H50zM100 950h50v50h-50zM150 950h50v50h-50zM200 950h50v50h-50zM250 950h50v50h-50zM300 950h50v50h-50zM350 950h50v50h-50zM400 950h50v50h-50zM450 950h50v50h-50zM500 950h50v50h-50zM550 950h50v50h-50zM600 950h50v50h-50zM650 950h50v50h-50zM700 950h50v50h-50zM750 950h50v50h-50zM800 950h50v50h-50zM850 950h50v50h-50zM900 950h50v50h-50zM950 950h50v50h-50zM1000 950h50v50h-50zM1050 950h50v50h-50zM1100 950h50v50h-50zM1150 950h50v50h-50zM1200 950h50v50h-50zM1250 950h50v50h-50zM1300 950h50v50h-50zM1350 950h50v50h-50zM1400 950h50v50h-50zM1450 950h50v50h-50zM1500 950h50v50h-50zM1550 950h50v50h-50zM1600 950h50v50h-50zM1650 950h50v50h-50zM1700 950h50v50h-50zM1750 950h50v50h-50zM1800 950h50v50h-50zM1850 950h50v50h-50zM1900 950h50v50h-50zM1950 950h50v50h-50z" />
					</g>
					<defs>
						<radialGradient id="a">
							<stop offset="50%" stopColor="#fff" stopOpacity="0" />
							<stop offset="1" stopColor="#fff" stopOpacity="1" />
						</radialGradient>
					</defs>
				</svg>
			</div>

			<div className="relative">
				<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight  text-muted-foreground  sm:text-7xl">
					{t("hero.deploy")}{" "}
					<span className="relative whitespace-nowrap  text-primary">
						<svg
							aria-hidden="true"
							viewBox="0 0 418 42"
							className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary"
							preserveAspectRatio="none"
						>
							<path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
						</svg>
						<span className="relative"> {t("hero.anywhere")}</span>
					</span>{" "}
					{t("hero.with")}
				</h1>
				<p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-muted-foreground">
					{t("hero.des")}
				</p>
				<div className="flex flex-col gap-6 md:gap-10">
					<div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:flex-nowrap">
						<code className="flex flex-row items-center gap-4 rounded-xl border p-3 font-sans">
							curl -sSL https://dokploy.com/install.sh | sh
							<button
								type="button"
								onClick={() =>
									navigator.clipboard
										.writeText("curl -sSL https://dokploy.com/install.sh | sh")
										.then(() => setIsCopied(true))
										.catch(() => setIsCopied(false))
								}
							>
								{isCopied ? (
									<Check className="h-4 w-4 text-muted-foreground" />
								) : (
									<Copy className="h-4 w-4 text-muted-foreground" />
								)}
							</button>
						</code>
						{/* <Button className="rounded-xl" asChild>
							<Link
								href="https://discord.gg/2tBnJ3jDJc"
								aria-label="Dokploy on GitHub"
								target="_blank"
								className="flex flex-row gap-2 items-center"
							>
								<svg
									role="img"
									className="h-6 w-6 fill-[#5867F6]"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
								</svg>
								Discord
							</Link>
						</Button> */}
						<Button className="rounded-xl" asChild>
							<Link
								href="https://github.com/dokploy/dokploy"
								aria-label="Dokploy on GitHub"
								target="_blank"
								className="flex flex-row items-center gap-2"
							>
								<svg aria-hidden="true" className="h-6 w-6 fill-black">
									<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
								</svg>
								Github
							</Link>
						</Button>
					</div>
				</div>
				<div className="mt-16 flex flex-row justify-center gap-x-8 rounded-lg sm:gap-x-0  sm:gap-y-10 xl:gap-x-12 xl:gap-y-0">
					<iframe
						width="460"
						height="215"
						src="https://www.youtube-nocookie.com/embed/mznYKPvhcfw?si=vHvqP3HKy0V3XkOZ"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="rounded-xl"
					/>
				</div>
				<ShowSponsors />
				{/* <div className="mt-16">
					<p className="font-display text-base  text-primary">
						{t("hero.featuredIn")}
					</p>
					<ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
						{[
							[
								{ name: "Product Hunt", logo: <ProductHunt /> },
								// { name: "Hacker News", logo: <ProductHunt /> },
							],
						].map((group, groupIndex) => (
							<li key={`group-${groupIndex}`}>
								<ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
									{group.map((company) => (
										<li key={company.name} className="flex">
											{company.logo}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div> */}
			</div>
		</Container>
	);
}

export const ShowSponsors = () => {
	return (
		<div className="mt-20 flex flex-col justify-center gap-y-10">
			<div className="flex flex-col gap-4 justify-start">
				<h1 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight  text-primary  sm:text-5xl">
					Sponsors
				</h1>
				<p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground">
					Dokploy is an open source project that is maintained by a community of
					volunteers. We would like to thank our sponsors for their support and
					contributions to the project, which help us to continue to develop and
					improve Dokploy.
				</p>
			</div>
			<div className="flex flex-col gap-4 md:gap-6 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Hero Sponsors 🎖
				</h2>
				<div className="flex flex-wrap items-center gap-4">
					<a
						href="https://www.hostinger.com/vps-hosting?ref=dokploy"
						target="_blank"
						className="flex-shrink-0"
						rel="noreferrer"
					>
						<img
							src="https://raw.githubusercontent.com/Dokploy/dokploy/canary/.github/sponsors/hostinger.jpg"
							alt="hostinger.com"
							className="rounded-xl w-[190px] h-auto"
						/>
					</a>
					<a
						href="https://www.lxaer.com?ref=dokploy"
						target="_blank"
						className="flex-shrink-0"
						rel="noreferrer"
					>
						<img
							src="https://raw.githubusercontent.com/Dokploy/dokploy/canary/.github/sponsors/lxaer.png"
							alt="lxaer.com"
							className="rounded-xl w-[70px] h-auto"
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-8 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Premium Supporters 🥇
				</h2>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<a
						href="https://supafort.com/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://supafort.com/build/q-4Ht4rBZR.webp"
							alt="Supafort.com"
							className="rounded-xl"
							width="190"
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-8 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Supporting Members 🥉
				</h2>
				<div className="flex flex-row gap-10">
					<a
						href="https://lightspeed.run/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://github.com/lightspeedrun.png"
							className="rounded-xl"
							width="60px"
							alt="Lightspeed.run"
						/>
					</a>
					<a
						href="https://cloudblast.io/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://cloudblast.io/img/logo-icon.193cf13e.svg"
							className="rounded-xl"
							width="250px"
							alt="Cloudblast.io"
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-8 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Community Backers 🤝
				</h2>
				<div className="flex flex-row gap-10">
					<a
						href="https://steamsets.com/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://avatars.githubusercontent.com/u/111978405?s=200&v=4"
							className="rounded-xl"
							width="60px"
							alt="Steamsets.com"
						/>
					</a>
					<a
						href="https://rivo.gg/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://avatars.githubusercontent.com/u/126797452?s=200&v=4"
							className="rounded-xl"
							width="60px"
							alt="Rivo.gg"
						/>
					</a>

					<a
						href="https://photoquest.wedding/?ref=dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://photoquest.wedding/favicon/android-chrome-512x512.png"
							className="rounded-xl"
							width="60px"
							alt="Rivo.gg"
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-8 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Organizations:
				</h2>
				<div className="flex flex-row gap-10">
					<a
						href="https://opencollective.com/dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://opencollective.com/dokploy/organizations.svg?width=890"
							alt="Organization Sponsors"
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-8 justify-start">
				<h2 className="font-display text-2xl font-medium tracking-tight  text-primary  sm:text-2xl text-left">
					Individuals:
				</h2>
				<div className="flex flex-row gap-10">
					<a
						href="https://opencollective.com/dokploy"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://opencollective.com/dokploy/individuals.svg?width=890"
							alt="Individual Sponsors"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
