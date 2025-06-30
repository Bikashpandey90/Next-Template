import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react"

export default function AboutUsComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-12">
          <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Logo" width={40} height={40} className="w-10" />
          <div className="hidden md:flex gap-8">
            <Link href="#" className="text-gray-600">
              Product
            </Link>
            <Link href="#" className="text-gray-600">
              Features
            </Link>
            <Link href="#" className="text-gray-600">
              Resources
            </Link>
            <Link href="#" className="text-gray-600">
              Company
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600">
            Log in →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">We're changing the way people connect</h1>
            <p className="text-gray-600 text-lg">
              Cupiditate nemo ut magni dolore sint dolor qui. Sunt sit in quis explicabo modi sunt sint. Et sapiente
              corporatur nihil illum similique magnam. Voluptatem ut quo. Sed dolores ut quia ea. Ut maxime ut pariatur
              in voluptates ullam. Eo voluptate temper esse minm amet fugiat veritatis excepturi aliquid.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt="Team collaboration"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt="Office culture"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-[200px] mt-8"
            />
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt="Team meeting"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              alt="Working together"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-[200px] mt-8"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our mission</h2>
            <p className="text-gray-600">
              Aliquam nisi non consectetur velit adipisicing magna. Nisi sunt, et esse. In facilis ut enim. Cum eget
              dolorum. Quisque et ut vitae fugiat similique eo. Enim voluptate qui ut in veritatis suspenisse eget.
              Delenint eligendi fringilla nisi.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold">44 million</div>
              <p className="text-sm text-gray-600">Transactions every 24 hours</p>
            </div>
            <div>
              <div className="text-3xl font-bold">$119 trillion</div>
              <p className="text-sm text-gray-600">Assets under custody</p>
            </div>
            <div>
              <div className="text-3xl font-bold">46,000</div>
              <p className="text-sm text-gray-600">New users monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="w-full h-[400px] relative my-20">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
          alt="Team overlooking view"
          fill
          className="object-cover"
        />
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">Our values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold mb-2">Be world-class</h3>
            <p className="text-gray-600">
              Aut illo quae. Ut et harum ea animi nulla. Culpa distinctio voluptate est ex. Distinctio sed dolor.
              Consequatur qui quia. Nemo corporis sint vitae lacly maiores.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Share everything you know</h3>
            <p className="text-gray-600">
              Mollitia delectus a omnis. Quam velit affluat. Iste nisi doloremque praesentium amet. Dolores eos ut et
              atque tenetur an sunt et vitae rerum distinctly maiores.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Always learning</h3>
            <p className="text-gray-600">
              Aut repellendus et officiis dolor possimus. Deserunt velit et. Voluptas veniam aut atque dolores. Culpa a
              ipsum. Explicabo ipsum ut.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-gray-600 mb-12">Trusted by the world's most innovative teams</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {["Transistor", "Reform", "Tuple", "SavvyCal", "Statamic"].map((company) => (
            <div key={company} className="text-gray-400 font-semibold">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">Our team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Team member" width={96} height={96} className="rounded-full" />
              </div>
              <div className="font-medium">Name</div>
              <div className="text-sm text-gray-600">Position</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">From the blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Link href="#" key={i} className="group">
              <div className="aspect-video relative mb-4">
                <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Blog post" fill className="rounded-lg object-cover" />
              </div>
              <h3 className="font-medium group-hover:text-gray-600">Blog post title goes here</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-center gap-8 mb-8">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
          <div className="text-center text-sm text-gray-600">© 2024 Your Company. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

