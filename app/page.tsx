import Image from "next/image";
import LanguageSelector from "./_components/language-selector";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchForm from "./_components/search-form";

export default function Home() {
  return (
    <>
      <div className="bg-button w-full py-3 text-text flex max-lg:flex-col  items-center justify-center max-lg:text-sm max-lg:overflow-hidden">
        <div className="container flex-1 flex justify-center space-x-2">
          <div className="max-md:animate-scroll-horizontal-infinite max-lg:text-nowrap">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="max-lg:hidden flex">
            <span className="font-semibold underline">ShopNow</span>
          </div>
        </div>
        <div className="max-lg:hidden flex space-x-1 items-center">
          <LanguageSelector />
        </div>
      </div>
      <header className="sticky top-0  z-10 transition-transform duration-300 w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="container py-6 flex justify-between items-center">
            <Image src={"/logo.svg"} height={24} width={118} alt="logo" />

            <nav className="max-md:hidden">
              <ul className="flex space-x-12">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
              </ul>
            </nav>

            <div className="flex space-x-6">
              <SearchForm />
              <div className="flex space-x-4">
                <Image
                  src={"/icons/heart-black.svg"}
                  height={24}
                  width={24}
                  alt="heart-icon"
                />
                <Image
                  src={"/icons/cart-black.svg"}
                  height={24}
                  width={24}
                  alt="cart-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full  bg-secondary" />
      </header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        possimus officia dignissimos dolorem, praesentium sit beatae a debitis?
        Saepe asperiores incidunt reprehenderit voluptates consequuntur pariatur
        cum. Id, quod pariatur at, fugit enim dolore debitis, incidunt non ab
        omnis ad praesentium accusantium dicta. Quidem velit totam molestias
        accusamus necessitatibus nihil, obcaecati consequatur explicabo
        consectetur, maxime optio vitae, amet reiciendis! Hic ab sunt culpa qui
        beatae! Porro doloremque eius consectetur sapiente, pariatur explicabo
        aut quidem quas harum vitae voluptates tenetur ea vel laudantium
        deserunt ipsum, culpa fuga commodi. Fugiat sed ea tempore eius vitae
        animi quam praesentium debitis ad cum esse amet ex aspernatur corrupti
        quasi, officiis ut harum culpa doloremque quo adipisci reprehenderit
        minus dolor explicabo. Consectetur quas fugit quibusdam sed illum
        dolores inventore obcaecati! Tempore a recusandae magnam et, ut vero
        suscipit aliquam deleniti, saepe dolores dolorem ducimus veritatis,
        dolorum omnis commodi. Expedita at labore dolorum iste. Debitis ut
        tenetur atque a cupiditate rerum quasi voluptatibus dicta dolore.
        Voluptates maiores iste autem ad, vel soluta nisi quibusdam hic maxime
        placeat eligendi numquam obcaecati beatae unde quod quae facilis
        aspernatur iure fugit doloribus, harum fugiat pariatur quaerat! Totam at
        qui sequi modi aperiam numquam, tenetur commodi, voluptate
        exercitationem nostrum eligendi perspiciatis ex harum officiis sint
        aspernatur aut facere. Odio necessitatibus quasi, blanditiis dolores
        adipisci nemo culpa reiciendis deleniti nobis a sed esse quae enim
        doloribus rem voluptatibus? Error laboriosam eligendi voluptate
        corrupti, nesciunt dolor laborum quod sint ipsa autem temporibus, earum
        quam sequi doloribus nemo cumque distinctio nobis. Necessitatibus
        repellendus laudantium neque pariatur commodi ea adipisci sint placeat,
        dolorum delectus, possimus soluta blanditiis. Voluptas laborum ipsum
        eveniet corporis illum, vitae earum doloremque fuga, ut non sit debitis
        consequuntur, blanditiis voluptates odio aperiam possimus distinctio
        labore excepturi enim est unde! Ipsa deleniti labore recusandae voluptas
        facere necessitatibus mollitia ipsam tempore cum odit molestias
        obcaecati, saepe, sequi eos, quidem iure? Incidunt, illum maxime! Odit
        eos, quaerat, velit porro commodi natus ratione qui molestiae
        repudiandae cum dolore ex repellat! Labore quasi obcaecati debitis
        laborum quaerat suscipit deleniti rem autem culpa at esse, ipsam itaque
        ipsum cumque unde, ullam nostrum. Ducimus minima maxime dolore
        consequuntur deleniti quod nihil labore tempore porro culpa natus,
        laudantium, qui illo distinctio vitae possimus necessitatibus omnis
        alias, ipsam reiciendis sunt perspiciatis. Delectus qui animi fuga quod
        repudiandae porro iste adipisci facilis aperiam, alias, esse blanditiis
        hic expedita corrupti nisi sit? Fugiat architecto porro nobis impedit?
        Neque, dicta sed rerum maiores autem ea omnis modi numquam obcaecati
        exercitationem explicabo beatae delectus porro doloribus quos tempore
        laborum! Iste, laboriosam natus. Unde facere quia pariatur sit minima
        corporis quidem vitae quisquam excepturi, adipisci ducimus rem est,
        dignissimos sunt numquam? Nemo reprehenderit minus repellendus nihil
        optio? Blanditiis dolorem esse, et cum quis at placeat sit quo totam
        optio labore rem magni eaque atque consectetur! Libero, dolor sapiente!
        Magni voluptatibus voluptatem sed adipisci voluptas enim quasi
        voluptates facilis reprehenderit ipsa. Mollitia culpa assumenda ea
        omnis. Vero, quis dicta officiis modi est dolorum mollitia repellat enim
        nobis dolor ex voluptates culpa commodi animi facilis quidem laborum rem
        fugit aspernatur assumenda itaque velit impedit iusto quibusdam?
        Pariatur nostrum adipisci facere reprehenderit cumque quos, placeat
        aliquid? Sed aut eligendi magni laudantium fugit, amet voluptates quod
        nobis nam quidem velit nihil labore alias blanditiis. Temporibus
        provident sit debitis nihil repudiandae voluptatum, ab ducimus non
        aliquam blanditiis veniam officia cupiditate. Commodi optio voluptatibus
        temporibus porro aliquam ipsum nihil eligendi tempora. Eius, quia
        molestias. Quibusdam ad tenetur optio dignissimos deserunt, perferendis
        blanditiis dolorem modi qui, officiis tempora quis aperiam amet
        inventore aut ullam distinctio itaque ut nam nobis. Adipisci dolorem
        similique tempora cum aspernatur porro, laboriosam quasi laborum
        repellat reiciendis nihil dolore esse rerum optio, doloribus nobis. Esse
        debitis amet deleniti molestiae labore in necessitatibus optio sit
        veritatis natus officiis rem quod facere, dolor odio laudantium. Natus
        rem fugiat nulla laboriosam minima ipsum voluptatum voluptas quibusdam?
        Necessitatibus, qui recusandae quidem repellat esse non provident
        doloremque, error voluptatem sed saepe aspernatur molestiae pariatur
        autem voluptate aliquam est fugit aut iure veniam deserunt quo.
        Dignissimos, quas? Labore rerum, non quas impedit fuga, eum, in dolorem
        temporibus commodi doloribus necessitatibus enim est quo incidunt
        deleniti! Consectetur officiis libero unde aut, nesciunt tenetur
        provident. Tempore sequi ab necessitatibus error aut consectetur cum
        asperiores assumenda magnam. Est exercitationem vero accusantium
        numquam? Vitae asperiores excepturi assumenda! Saepe nulla dolores
        nesciunt tempora consequuntur minus amet atque deserunt aliquid
        repudiandae doloribus, suscipit architecto rem? Eligendi quibusdam
        exercitationem repellendus saepe, a repellat! Labore suscipit aut non
        tenetur, error, quis modi deserunt officiis unde ipsa consectetur
        repudiandae. Nostrum id delectus est. Veniam quo minima nulla odit, sit
        odio doloribus optio. Magnam, voluptate aut! Unde optio ipsam a nulla
        enim qui consequuntur nobis quisquam incidunt modi asperiores
        necessitatibus ut assumenda tempore corrupti non error, beatae, delectus
        iure sequi nostrum vero voluptatem excepturi eum! Excepturi impedit
        minima temporibus iusto, perspiciatis iste suscipit natus error dolor
        architecto. Dignissimos tempore minima porro itaque amet aut totam
        fugiat voluptates suscipit, culpa, atque dicta libero, assumenda
        excepturi minus! Enim voluptates sint molestiae iusto? Temporibus
        voluptates totam ducimus corrupti rem praesentium adipisci ipsa, fugit
        quis nulla facere officia nihil. Culpa quod voluptatibus id dolore
        dolores a eveniet commodi minus neque enim sed adipisci soluta
        consequuntur reiciendis doloremque sint, voluptates molestiae quia eius
        provident? Cumque, rerum perferendis, excepturi molestias exercitationem
        similique quia adipisci tempora numquam consequatur laborum odio
        corrupti non velit ratione, deleniti impedit mollitia libero earum harum
        explicabo. Laudantium omnis natus voluptatum hic odit perspiciatis
        consequuntur, nulla maiores libero nemo cumque maxime ipsam excepturi
        illum similique architecto quam? Eum laboriosam magnam dolorum aliquam.
        Ut doloribus laborum quasi nemo harum vero sunt odio cupiditate libero
        cum, possimus quam distinctio mollitia laboriosam voluptates voluptate
        consectetur autem, sapiente necessitatibus perspiciatis nisi rem odit
        facere. Alias voluptates sed adipisci ab! Dolorum adipisci, laudantium
        quos quidem voluptates, quam harum excepturi qui quo expedita quia sed
        iusto fuga, reiciendis dolores? Voluptatum quisquam quia delectus! Cum
        perspiciatis sequi officiis ut cumque mollitia ullam suscipit laborum
        debitis? Minus aperiam quo iure inventore fugiat ducimus beatae quas
        doloremque, ea reprehenderit repellendus nostrum repudiandae tempora
        quaerat? Inventore, nulla.
      </div>
    </>
  );
}
