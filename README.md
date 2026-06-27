# StarQuiz V3.1

KKTC Genel Kültür odaklı, mobil uyumlu PWA test uygulaması.

## Özellikler

- 500 soruluk başlangıç soru havuzu
- Akıllı rastgele seçim: aynı testte tekrar soru yok
- Son çıkan soruları geçici olarak tekrar göstermeme
- Her testte şıkları yeniden karıştırma
- 10 / 20 / 30 soruluk seviye testleri
- Rastgele soru seçimi
- Seçenek seçince otomatik sonraki soruya geçme
- Test sonunda doğru / yanlış / başarı / XP
- Yanlışlarım ekranı
- İstatistikler
- Rozet sistemi
- GitHub Pages uyumlu
- PWA / telefona eklenebilir yapı

## GitHub Pages

1. Dosyaları GitHub'da `StarQuiz` reposuna yükle.
2. Settings > Pages bölümüne gir.
3. Source: Deploy from a branch
4. Branch: main / root seç.
5. Link: `https://kullaniciadiniz.github.io/StarQuiz/`

## Soru Ekleme

Sorular `questions.js` dosyasındadır.
Her soru şu formattadır:

```js
{
  id: "kktc-001",
  category: "Temel Bilgiler",
  difficulty: "Kolay",
  question: "KKTC'nin başkenti neresidir?",
  options: ["Lefkoşa", "Girne", "Gazimağusa", "Güzelyurt"],
  answer: "Lefkoşa",
  explanation: "Lefkoşa, KKTC'nin başkenti ve idari merkezidir.",
  source: "KKTC Enformasyon Dairesi"
}
```
