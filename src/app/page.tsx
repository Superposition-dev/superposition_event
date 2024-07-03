import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-[100vh] flex items-center justify-center bg-neutral-950'>
      <div className='w-full h-full  max-w-screen-sm bg-black overflow-y-scroll overflow-x-hidden'>
        <div className='min-h-[320px]'>
          <Image src='/background_text.webp' alt='텍스트 이미지' width={680} height={400} />
        </div>
        <p className='text-white text-3xl text-center translate-y-[-120px]'>
          예술 구독 서비스 <span className='text-[#7DD732] '>캔익</span> 오픈!
        </p>
        <div className='min-h-[280px] relative translate-y-[-80px]'>
          <Image
            src='/blue.webp'
            alt='파랑원'
            width={200}
            height={225}
            className='absolute right-0 translate-x-[40px]'
          />
          <Image
            src='/purple.webp'
            alt='보라원'
            width={200}
            height={225}
            className='absolute left-0 bottom-0 translate-x-[-20px]'
          />
        </div>
        <div className='w-full flex items-center justify-center mb-4'>
          <Image src='/title.webp' alt='타이틀 제목' width={340} height={200} />
        </div>
        <div className='min-h-[470px] relative mb-4'>
          <Image
            src='/pink.webp'
            alt='분홍원'
            width={200}
            height={225}
            className='absolute right-0'
          />
          <Image
            src='/yellow.webp'
            alt='노랑원'
            width={250}
            height={225}
            className='absolute left-0 top-8 translate-x-[-80px]'
          />
          <Image
            src='/green.webp'
            alt='초록원'
            width={200}
            height={225}
            className='absolute right-2 bottom-0'
          />
        </div>
        <div className='text-center flex flex-col gap-12 text-2xl text-white/60  relative'>
          <p className='font-light'>
            전시는 보고싶지만
            <br />
            일상이 바쁜 우리를 위해
          </p>
          <p>
            그동안 미술이 어려웠던
            <br />
            우리를 위해
          </p>
          <p className='font-medium text-white/80'>
            매주 신선한 신선작품을 <br />
            5점씩 보내드릴게요.
          </p>
          <p className='font-bold text-white'>
            여러분의 일상에 <br />
            쉽고 가벼운 미술이 찾아갑니다!
          </p>
          <Image
            src='/lime.webp'
            alt='라임원'
            width={140}
            height={140}
            className='absolute left-0 top-10 translate-x-[-80px] '
          />
          <Image
            src='/orange.webp'
            alt='주황원'
            width={140}
            height={140}
            className='absolute right-0 top-40 translate-x-[80px] '
          />
        </div>
        <div className='min-h-[200px] relative flex justify-center'>
          <div className='flex items-center'>
            <input
              className='min-w-[260px] h-12 z-10 rounded-tl-full rounded-bl-full bg-white/40 outline-none px-4'
              placeholder='이메일을 입력해주세요.'
            />
            <button className='bg-[#6e28ac] opacity-80 w-[60px] h-12 rounded-r-full flex items-center justify-center'>
              <Image src='/icon_send.webp' alt='전송 아이콘' width={26} height={20} />
            </button>
          </div>
          <Image
            src='/text.webp'
            alt='텍스트 이미지'
            width={260}
            height={200}
            className='absolute left-0 bottom-0 translate-x-[-100px] translate-y-[140px] z-[1px] '
          />
          <Image
            src='/logo.webp'
            alt='로고 이미지'
            width={200}
            height={200}
            className='absolute bottom-0'
          />
        </div>
      </div>
    </main>
  );
}
