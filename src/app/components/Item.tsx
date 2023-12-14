import Link from 'next/link';
import Image from 'next/image';
export default function Item({product}){
    return (
        <li className="p-4 bg-slate-200 list-none" key={product.id}>
            <Link href={product.id}>
            <Image
                src={product.image}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.category}</p>
            </Link>
        </li>
    )
}
//<img src={product.imgUrl} alt="pictures" width="200" height="200"/>