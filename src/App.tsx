import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-logo">
          
          
        </div>
        <ul>
          <li><a href="#services">サービス</a></li>
          <li><a href="#price">料金</a></li>
          <li><a href="#concept">コンセプト</a></li>
          <li><a href="#access">アクセス</a></li>
          <li><a href="#contact">ご予約・お問い合わせ</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero_bg.jpeg)` }}>
        <div className="hero-content">
          <p className="hero-catchphrase">ご自愛は、“甘やかし”じゃなくて、未来のセルフケアです。</p>
        </div>
      </section>

      

      

      <section id="services" className="services-section">
        <h2>サービス内容</h2>
        
        <ul>
          <li>鍼灸治療</li>
          <li>ヨガ・ピラティス指導</li>
          <li>オイルマッサージ</li>
          <li>美容鍼灸</li>
        </ul>
      </section>

      <section id="price" className="price-section">
        <h2>料金</h2>
        <p>90分 15,000円</p>
        <h3>【7月限定】初診キャンペーン</h3>
        <p>5名様限定 5,000円</p>
      </section>

      <section id="concept" className="concept-section">
        <h2>GOJIAI...のコンセプト</h2>
        <p>なんとなく疲れやすい、朝起きてもスッキリしない、肩こり・腰痛が慢性化している。</p>

        <p>そんな“理由のわからない不調”に悩まされていませんか？</p>

        <p>GOJIAI...では、痛みや不調を一時的に取り除くだけでなく、身体が本来持っている回復力や動きやすさを取り戻すことを目的としています。</p>

        <p>ただマッサージを受けるだけの「癒し」ではなく、</p>
        <p>ただ鍛えるだけの「トレーニング」でもない。</p>

        <p>ご自愛とは、自分の身体の声に気づき、正しく手をかけていく“技術”です。</p>

        <p>当院では、整形外科での臨床経験や、国家資格（柔道整復師・鍼灸師）の知識、</p>
        <p>さらにピラティスや運動療法の理論をベースに、</p>
        <p>あなたの「日常のクセ」や「身体の使い方」まで丁寧に読み解きながら、再発しない身体づくりをサポートします。</p>

        <p>「身体が整うと、気持ちまで整う」</p>
        <p>そんな変化を、ぜひ一緒に実感してください。</p>

        <h3>GOJIAI...が大切にしている3つの視点</h3>
        <ul>
          <li>感覚 × 科学のバランス</li>
          <li>→「なんとなく不調」と「数値や評価」の両方をもとに整えます。</li>
          <li>日常の中で整える</li>
          <li>→施術だけで終わらず、自宅でできるセルフケアや生活習慣のアドバイスも大切にしています。</li>
          <li>一人ひとりの「戻るべき状態」を見つける</li>
          <li>→誰かと比べるのではなく、あなた自身の“ちょうどよさ”を一緒に探します。</li>
        </ul>

        <h3>こんな方にご来院いただいています</h3>
        <ul>
          <li>慢性的な腰痛・肩こり・疲れがある</li>
          <li>整体やマッサージを受けてもすぐ戻ってしまう</li>
          <li>病院では「異常なし」と言われたがつらい</li>
          <li>出産後の不調をなんとかしたい</li>
          <li>自分の身体の整え方をちゃんと知りたい</li>
        </ul>

        <h3>目指すのは、「もう不調に振り回されない私」</h3>
        <p>一時的な対処ではなく、</p>
        <p>ご自身の身体と対話しながら、根本から整えていく場所。</p>
        <p>それが、GOJIAI...の治療院です。</p>
      </section>

      <section id="access" className="access-section">
        <h2>アクセス</h2>
        
        <p>埼玉県さいたま市浦和区仲町4-1-2メゾンナナ101</p>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9900000000005!2d139.6578999!3d35.86000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35935f2d00000001%3A0x0000000000000001!2z44CSMzc2LTAwMTUg5埼玉県さいたま市浦和区仲町４丁目１−２ メゾンナナ!5e0!3m2!1sja!2sjp!4v1678901234567!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of GOJIAI..."
          ></iframe>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>ご予約・お問い合わせ</h2>
        <a href="https://lin.ee/hfdMTR6" target="_blank" rel="noopener noreferrer" className="line-button">LINEで予約・お問い合わせ</a>
        <h3>営業時間</h3>
        <ul>
          <li>水曜・土曜: 14:00 - 17:00</li>
          <li>日曜: 10:00 - 17:00</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
