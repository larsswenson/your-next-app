import Head from 'next/head';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Next.js Landing Page</title>
      </Head>
      <Header />
      <main>
        <Section title="Section 1" content="Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Enim neque volutpat ac tincidunt vitae. Sit amet volutpat consequat mauris nunc congue nisi vitae. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. A arcu cursus vitae congue mauris rhoncus aenean. Euismod nisi porta lorem mollis aliquam ut porttitor. Sed libero enim sed faucibus turpis in eu mi bibendum. Velit aliquet sagittis id consectetur purus ut. Nibh venenatis cras sed felis eget velit aliquet sagittis. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Integer eget aliquet nibh praesent tristique magna. Ut porttitor leo a diam sollicitudin. Ac turpis egestas maecenas pharetra. Egestas integer eget aliquet nibh praesent tristique. A pellentesque sit amet porttitor eget dolor. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Risus in hendrerit gravida rutrum quisque non tellus orci." />
        <Section title="Section 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Praesent tristique magna sit amet purus gravida. Consequat nisl vel pretium lectus quam id leo in vitae. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Et netus et malesuada fames ac. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Imperdiet dui accumsan sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Viverra suspendisse potenti nullam ac tortor vitae purus. Adipiscing bibendum est ultricies integer quis auctor elit sed. Auctor augue mauris augue neque gravida in fermentum et. Dolor sed viverra ipsum nunc aliquet bibendum. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis." />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
