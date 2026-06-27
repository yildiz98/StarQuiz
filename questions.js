const QUESTIONS = [
  {
    "id": "kktc-001",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "KKTC'nin başkenti neresidir?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Güzelyurt",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Lefkoşa, KKTC'nin başkenti ve idari merkezidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-002",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kuzey Kıbrıs Türk Cumhuriyeti hangi tarihte kurulmuştur?",
    "options": [
      "15 Kasım 1983",
      "Ankara",
      "İzmir",
      "İstanbul"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "KKTC'nin kuruluş tarihi 15 Kasım 1983'tür.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-003",
    "category": "Devlet Yapısı",
    "difficulty": "Kolay",
    "question": "KKTC'nin yönetim şekli hangisidir?",
    "options": [
      "Ankara",
      "İzmir",
      "Parlamenter demokrasi",
      "İstanbul"
    ],
    "answer": "Parlamenter demokrasi",
    "explanation": "KKTC resmi genel bilgilerinde yönetim şekli parlamenter demokrasi olarak belirtilir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-004",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin yüzölçümü yaklaşık kaç km²'dir?",
    "options": [
      "Ankara",
      "3.248 km²",
      "İstanbul",
      "İzmir"
    ],
    "answer": "3.248 km²",
    "explanation": "KKTC Enformasyon Dairesi coğrafi bilgilerinde yüzölçümü 3.248 km² olarak yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-005",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "15 Kasım KKTC'de hangi gün olarak kutlanır?",
    "options": [
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "İşçi ve Bahar Bayramı",
      "Yılbaşı",
      "KKTC Cumhuriyet Bayramı"
    ],
    "answer": "KKTC Cumhuriyet Bayramı",
    "explanation": "15 Kasım, KKTC Cumhuriyet Bayramı'dır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-006",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Ankara",
      "Lefkoşa",
      "Limasol",
      "Larnaka"
    ],
    "answer": "Lefkoşa",
    "explanation": "Lefkoşa, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-007",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Lefkoşa hangi ülkenin ilçelerinden biridir?",
    "options": [
      "Türkiye",
      "Yunanistan",
      "Güney Kıbrıs",
      "KKTC"
    ],
    "answer": "KKTC",
    "explanation": "Lefkoşa, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-008",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Ankara",
      "Gazimağusa",
      "Limasol",
      "Larnaka"
    ],
    "answer": "Gazimağusa",
    "explanation": "Gazimağusa, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-009",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Gazimağusa hangi ülkenin ilçelerinden biridir?",
    "options": [
      "Güney Kıbrıs",
      "KKTC",
      "Türkiye",
      "Yunanistan"
    ],
    "answer": "KKTC",
    "explanation": "Gazimağusa, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-010",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Limasol",
      "Larnaka",
      "Girne",
      "Ankara"
    ],
    "answer": "Girne",
    "explanation": "Girne, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-011",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Girne hangi ülkenin ilçelerinden biridir?",
    "options": [
      "KKTC",
      "Türkiye",
      "Güney Kıbrıs",
      "Yunanistan"
    ],
    "answer": "KKTC",
    "explanation": "Girne, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-012",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Güzelyurt",
      "Larnaka",
      "Limasol",
      "Ankara"
    ],
    "answer": "Güzelyurt",
    "explanation": "Güzelyurt, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-013",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Güzelyurt hangi ülkenin ilçelerinden biridir?",
    "options": [
      "Güney Kıbrıs",
      "Yunanistan",
      "KKTC",
      "Türkiye"
    ],
    "answer": "KKTC",
    "explanation": "Güzelyurt, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-014",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Larnaka",
      "Limasol",
      "İskele",
      "Ankara"
    ],
    "answer": "İskele",
    "explanation": "İskele, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-015",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "İskele hangi ülkenin ilçelerinden biridir?",
    "options": [
      "Güney Kıbrıs",
      "Türkiye",
      "KKTC",
      "Yunanistan"
    ],
    "answer": "KKTC",
    "explanation": "İskele, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-016",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Aşağıdakilerden hangisi KKTC ilçelerinden biridir?",
    "options": [
      "Ankara",
      "Larnaka",
      "Limasol",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Lefke, KKTC'nin ilçeleri arasında yer alır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-017",
    "category": "İlçeler",
    "difficulty": "Kolay",
    "question": "Lefke hangi ülkenin ilçelerinden biridir?",
    "options": [
      "Yunanistan",
      "Türkiye",
      "Güney Kıbrıs",
      "KKTC"
    ],
    "answer": "KKTC",
    "explanation": "Lefke, KKTC'de bulunan ilçelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-018",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "1 Ocak KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Yılbaşı",
      "Gençlik ve Spor Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "İşçi ve Bahar Bayramı"
    ],
    "answer": "Yılbaşı",
    "explanation": "1 Ocak, Yılbaşı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-019",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Yılbaşı hangi tarihte kutlanır?",
    "options": [
      "1 Ocak",
      "23 Nisan",
      "19 Mayıs",
      "1 Mayıs"
    ],
    "answer": "1 Ocak",
    "explanation": "Yılbaşı, 1 Ocak tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-020",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "23 Nisan KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Gençlik ve Spor Bayramı",
      "Yılbaşı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "İşçi ve Bahar Bayramı"
    ],
    "answer": "Ulusal Egemenlik ve Çocuk Bayramı",
    "explanation": "23 Nisan, Ulusal Egemenlik ve Çocuk Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-021",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Ulusal Egemenlik ve Çocuk Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Mayıs",
      "1 Ocak",
      "19 Mayıs",
      "23 Nisan"
    ],
    "answer": "23 Nisan",
    "explanation": "Ulusal Egemenlik ve Çocuk Bayramı, 23 Nisan tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-022",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "1 Mayıs KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Gençlik ve Spor Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "Yılbaşı",
      "İşçi ve Bahar Bayramı"
    ],
    "answer": "İşçi ve Bahar Bayramı",
    "explanation": "1 Mayıs, İşçi ve Bahar Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-023",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "İşçi ve Bahar Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Ocak",
      "19 Mayıs",
      "1 Mayıs",
      "23 Nisan"
    ],
    "answer": "1 Mayıs",
    "explanation": "İşçi ve Bahar Bayramı, 1 Mayıs tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-024",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "19 Mayıs KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Gençlik ve Spor Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "İşçi ve Bahar Bayramı",
      "Yılbaşı"
    ],
    "answer": "Gençlik ve Spor Bayramı",
    "explanation": "19 Mayıs, Gençlik ve Spor Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-025",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Gençlik ve Spor Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Mayıs",
      "23 Nisan",
      "19 Mayıs",
      "1 Ocak"
    ],
    "answer": "19 Mayıs",
    "explanation": "Gençlik ve Spor Bayramı, 19 Mayıs tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-026",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "20 Temmuz KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "İşçi ve Bahar Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "20 Temmuz, Barış ve Özgürlük Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-027",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Barış ve Özgürlük Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Ocak",
      "23 Nisan",
      "1 Mayıs",
      "20 Temmuz"
    ],
    "answer": "20 Temmuz",
    "explanation": "Barış ve Özgürlük Bayramı, 20 Temmuz tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-028",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "1 Ağustos KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "İşçi ve Bahar Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "1 Ağustos, Toplumsal Direniş Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-029",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Toplumsal Direniş Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Ocak",
      "1 Mayıs",
      "23 Nisan",
      "1 Ağustos"
    ],
    "answer": "1 Ağustos",
    "explanation": "Toplumsal Direniş Bayramı, 1 Ağustos tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-030",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "30 Ağustos KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "İşçi ve Bahar Bayramı"
    ],
    "answer": "Zafer Bayramı",
    "explanation": "30 Ağustos, Zafer Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-031",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Zafer Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Mayıs",
      "23 Nisan",
      "30 Ağustos",
      "1 Ocak"
    ],
    "answer": "30 Ağustos",
    "explanation": "Zafer Bayramı, 30 Ağustos tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-032",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "29 Ekim KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı",
      "Ulusal Egemenlik ve Çocuk Bayramı",
      "İşçi ve Bahar Bayramı"
    ],
    "answer": "Türkiye Cumhuriyet Bayramı",
    "explanation": "29 Ekim, Türkiye Cumhuriyet Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-033",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Türkiye Cumhuriyet Bayramı hangi tarihte kutlanır?",
    "options": [
      "1 Ocak",
      "29 Ekim",
      "23 Nisan",
      "1 Mayıs"
    ],
    "answer": "29 Ekim",
    "explanation": "Türkiye Cumhuriyet Bayramı, 29 Ekim tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-034",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "15 Kasım KKTC resmi takviminde hangi gün olarak yer alır?",
    "options": [
      "Yılbaşı",
      "İşçi ve Bahar Bayramı",
      "KKTC Cumhuriyet Bayramı",
      "Ulusal Egemenlik ve Çocuk Bayramı"
    ],
    "answer": "KKTC Cumhuriyet Bayramı",
    "explanation": "15 Kasım, KKTC Cumhuriyet Bayramı olarak bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-035",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "KKTC Cumhuriyet Bayramı hangi tarihte kutlanır?",
    "options": [
      "23 Nisan",
      "15 Kasım",
      "1 Ocak",
      "1 Mayıs"
    ],
    "answer": "15 Kasım",
    "explanation": "KKTC Cumhuriyet Bayramı, 15 Kasım tarihinde kutlanır.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-036",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Japonya",
      "Brezilya",
      "Türkiye",
      "Kanada"
    ],
    "answer": "Türkiye",
    "explanation": "Türkiye, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-037",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Japonya",
      "Brezilya",
      "Suriye",
      "Kanada"
    ],
    "answer": "Suriye",
    "explanation": "Suriye, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-038",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Kanada",
      "Lübnan",
      "Brezilya",
      "Japonya"
    ],
    "answer": "Lübnan",
    "explanation": "Lübnan, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-039",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Brezilya",
      "Kanada",
      "İsrail",
      "Japonya"
    ],
    "answer": "İsrail",
    "explanation": "İsrail, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-040",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Mısır",
      "Brezilya",
      "Kanada",
      "Japonya"
    ],
    "answer": "Mısır",
    "explanation": "Mısır, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-041",
    "category": "Coğrafya",
    "difficulty": "Orta",
    "question": "KKTC'nin coğrafi çevresinde yer alan ülkelerden biri hangisidir?",
    "options": [
      "Japonya",
      "Güney Kıbrıs",
      "Kanada",
      "Brezilya"
    ],
    "answer": "Güney Kıbrıs",
    "explanation": "Güney Kıbrıs, KKTC'nin coğrafi çevresinde adı geçen ülkelerden biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-042",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Cumhuriyet Meclisi hangi alanla ilişkilidir?",
    "options": [
      "yasama",
      "seçimlerin yürütülmesi ve denetlenmesi",
      "hükümetin yürütme merkezi",
      "devletin temsili"
    ],
    "answer": "yasama",
    "explanation": "Cumhuriyet Meclisi, yasama alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-043",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Avrupa Parlamentosu",
      "TBMM",
      "Ankara Büyükşehir Belediyesi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Cumhuriyet Meclisi, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-044",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Cumhurbaşkanlığı hangi alanla ilişkilidir?",
    "options": [
      "yasama",
      "hükümetin yürütme merkezi",
      "devletin temsili",
      "seçimlerin yürütülmesi ve denetlenmesi"
    ],
    "answer": "devletin temsili",
    "explanation": "Cumhurbaşkanlığı, devletin temsili alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-045",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "Cumhurbaşkanlığı",
      "TBMM",
      "Avrupa Parlamentosu",
      "Ankara Büyükşehir Belediyesi"
    ],
    "answer": "Cumhurbaşkanlığı",
    "explanation": "Cumhurbaşkanlığı, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-046",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Başbakanlık hangi alanla ilişkilidir?",
    "options": [
      "yasama",
      "hükümetin yürütme merkezi",
      "devletin temsili",
      "seçimlerin yürütülmesi ve denetlenmesi"
    ],
    "answer": "hükümetin yürütme merkezi",
    "explanation": "Başbakanlık, hükümetin yürütme merkezi alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-047",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "Avrupa Parlamentosu",
      "Ankara Büyükşehir Belediyesi",
      "TBMM",
      "Başbakanlık"
    ],
    "answer": "Başbakanlık",
    "explanation": "Başbakanlık, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-048",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Yüksek Seçim Kurulu hangi alanla ilişkilidir?",
    "options": [
      "yasama",
      "hükümetin yürütme merkezi",
      "devletin temsili",
      "seçimlerin yürütülmesi ve denetlenmesi"
    ],
    "answer": "seçimlerin yürütülmesi ve denetlenmesi",
    "explanation": "Yüksek Seçim Kurulu, seçimlerin yürütülmesi ve denetlenmesi alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-049",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "Ankara Büyükşehir Belediyesi",
      "Avrupa Parlamentosu",
      "TBMM",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Yüksek Seçim Kurulu",
    "explanation": "Yüksek Seçim Kurulu, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-050",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Dışişleri Bakanlığı hangi alanla ilişkilidir?",
    "options": [
      "hükümetin yürütme merkezi",
      "devletin temsili",
      "dış politika ve konsolosluk hizmetleri",
      "yasama"
    ],
    "answer": "dış politika ve konsolosluk hizmetleri",
    "explanation": "Dışişleri Bakanlığı, dış politika ve konsolosluk hizmetleri alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-051",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "Ankara Büyükşehir Belediyesi",
      "Dışişleri Bakanlığı",
      "Avrupa Parlamentosu",
      "TBMM"
    ],
    "answer": "Dışişleri Bakanlığı",
    "explanation": "Dışişleri Bakanlığı, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-052",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Enformasyon Dairesi hangi alanla ilişkilidir?",
    "options": [
      "hükümetin yürütme merkezi",
      "kamusal bilgilendirme ve tanıtım",
      "yasama",
      "devletin temsili"
    ],
    "answer": "kamusal bilgilendirme ve tanıtım",
    "explanation": "Enformasyon Dairesi, kamusal bilgilendirme ve tanıtım alanıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-053",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Aşağıdaki kurumlardan hangisi KKTC devlet yapısıyla ilişkilidir?",
    "options": [
      "TBMM",
      "Avrupa Parlamentosu",
      "Enformasyon Dairesi",
      "Ankara Büyükşehir Belediyesi"
    ],
    "answer": "Enformasyon Dairesi",
    "explanation": "Enformasyon Dairesi, KKTC'deki resmi kurum/kuruluş adlarından biridir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-054",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "Antik Liman ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Güzelyurt",
      "Girne",
      "Lefkoşa",
      "Gazimağusa"
    ],
    "answer": "Girne",
    "explanation": "Girne, Antik Liman özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-055",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "Suriçi ve tarihi kent dokusu ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Lefkoşa",
      "Güzelyurt",
      "Gazimağusa",
      "Girne"
    ],
    "answer": "Gazimağusa",
    "explanation": "Gazimağusa, Suriçi ve tarihi kent dokusu özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-056",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "başkent ve idari merkez ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Girne",
      "Güzelyurt",
      "Lefkoşa",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Lefkoşa, başkent ve idari merkez özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-057",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "narenciye ile bilinen bölge ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Girne",
      "Lefkoşa",
      "Güzelyurt",
      "Gazimağusa"
    ],
    "answer": "Güzelyurt",
    "explanation": "Güzelyurt, narenciye ile bilinen bölge özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-058",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "Karpaz'a yakınlığıyla bilinen ilçe ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Gazimağusa",
      "Girne",
      "İskele",
      "Lefkoşa"
    ],
    "answer": "İskele",
    "explanation": "İskele, Karpaz'a yakınlığıyla bilinen ilçe özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-059",
    "category": "Kültür ve Turizm",
    "difficulty": "Orta",
    "question": "batı kesimdeki tarihi ve doğal yapısıyla bilinen ilçe ifadesi en çok hangi KKTC bölgesiyle ilişkilidir?",
    "options": [
      "Girne",
      "Gazimağusa",
      "Lefke",
      "Lefkoşa"
    ],
    "answer": "Lefke",
    "explanation": "Lefke, batı kesimdeki tarihi ve doğal yapısıyla bilinen ilçe özelliğiyle bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-060",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs mutfağıyla özdeşleşen peynir hangisidir?",
    "options": [
      "Bulla",
      "Şeftali kebabı",
      "Hellim",
      "Molehiya"
    ],
    "answer": "Hellim",
    "explanation": "Hellim, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-061",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hellim daha çok hangi alanla ilişkilidir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Seçim sistemi",
      "Denizcilik mevzuatı",
      "İmar planı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Hellim, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-062",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs mutfağına özgü yemeklerden biri hangisidir?",
    "options": [
      "Bulla",
      "Şeftali kebabı",
      "Hellim",
      "Molehiya"
    ],
    "answer": "Şeftali kebabı",
    "explanation": "Şeftali kebabı, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-063",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Şeftali kebabı daha çok hangi alanla ilişkilidir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İmar planı",
      "Denizcilik mevzuatı",
      "Seçim sistemi"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Şeftali kebabı, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-064",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs mutfağında bilinen geleneksel yemeklerden biri hangisidir?",
    "options": [
      "Bulla",
      "Molehiya",
      "Hellim",
      "Şeftali kebabı"
    ],
    "answer": "Molehiya",
    "explanation": "Molehiya, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-065",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Molehiya daha çok hangi alanla ilişkilidir?",
    "options": [
      "Denizcilik mevzuatı",
      "Seçim sistemi",
      "Kıbrıs kültürü ve mutfağı",
      "İmar planı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Molehiya, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-066",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs mutfağında bilinen hamur işi hangisidir?",
    "options": [
      "Bulla",
      "Molehiya",
      "Şeftali kebabı",
      "Hellim"
    ],
    "answer": "Bulla",
    "explanation": "Bulla, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-067",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bulla daha çok hangi alanla ilişkilidir?",
    "options": [
      "Seçim sistemi",
      "İmar planı",
      "Kıbrıs kültürü ve mutfağı",
      "Denizcilik mevzuatı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Bulla, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-068",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs kültüründe ikramlık tatlı türü hangisidir?",
    "options": [
      "Molehiya",
      "Macun",
      "Şeftali kebabı",
      "Hellim"
    ],
    "answer": "Macun",
    "explanation": "Macun, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-069",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Macun daha çok hangi alanla ilişkilidir?",
    "options": [
      "Seçim sistemi",
      "Kıbrıs kültürü ve mutfağı",
      "Denizcilik mevzuatı",
      "İmar planı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Macun, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-070",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kıbrıs kültüründe bilinen geleneksel içki hangisidir?",
    "options": [
      "Zivaniya",
      "Hellim",
      "Molehiya",
      "Şeftali kebabı"
    ],
    "answer": "Zivaniya",
    "explanation": "Zivaniya, Kıbrıs kültürü ve mutfağıyla ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-071",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Zivaniya daha çok hangi alanla ilişkilidir?",
    "options": [
      "Seçim sistemi",
      "Kıbrıs kültürü ve mutfağı",
      "İmar planı",
      "Denizcilik mevzuatı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Zivaniya, Kıbrıs kültürü ve mutfağı içinde bilinir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-072",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ağustos",
      "20 Temmuz",
      "15 Kasım 1983",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Kıbrıs Barış Harekâtı, 20 Temmuz 1974 tarihiyle ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-073",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "20 Temmuz 1974 tarihi aşağıdakilerden hangisiyle ilişkilidir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Kıbrıs Barış Harekâtı",
      "KKTC'nin ilanı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Kıbrıs Barış Harekâtı",
    "explanation": "20 Temmuz 1974, Kıbrıs Barış Harekâtı ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-074",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "KKTC'nin ilanı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz",
      "20 Temmuz 1974",
      "1 Ağustos"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "KKTC'nin ilanı, 15 Kasım 1983 tarihiyle ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-075",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "15 Kasım 1983 tarihi aşağıdakilerden hangisiyle ilişkilidir?",
    "options": [
      "Kıbrıs Barış Harekâtı",
      "Barış ve Özgürlük Bayramı",
      "Toplumsal Direniş Bayramı",
      "KKTC'nin ilanı"
    ],
    "answer": "KKTC'nin ilanı",
    "explanation": "15 Kasım 1983, KKTC'nin ilanı ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-076",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "Toplumsal Direniş Bayramı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "1 Ağustos"
    ],
    "answer": "1 Ağustos",
    "explanation": "Toplumsal Direniş Bayramı, 1 Ağustos tarihiyle ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-077",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "1 Ağustos tarihi aşağıdakilerden hangisiyle ilişkilidir?",
    "options": [
      "KKTC'nin ilanı",
      "Barış ve Özgürlük Bayramı",
      "Toplumsal Direniş Bayramı",
      "Kıbrıs Barış Harekâtı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "1 Ağustos, Toplumsal Direniş Bayramı ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-078",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "Barış ve Özgürlük Bayramı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ağustos",
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "20 Temmuz"
    ],
    "answer": "20 Temmuz",
    "explanation": "Barış ve Özgürlük Bayramı, 20 Temmuz tarihiyle ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-079",
    "category": "Tarih",
    "difficulty": "Kolay",
    "question": "20 Temmuz tarihi aşağıdakilerden hangisiyle ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Toplumsal Direniş Bayramı",
      "KKTC'nin ilanı",
      "Kıbrıs Barış Harekâtı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "20 Temmuz, Barış ve Özgürlük Bayramı ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-080",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "BRT kısaltması hangi kurumla ilişkilidir?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "BRT, Bayrak Radyo Televizyon Kurumu ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-081",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "TAK kısaltması hangi kurumla ilişkilidir?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "TAK, Türk Ajansı Kıbrıs ile ilişkilidir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-082",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Yakın Doğu Üniversitesi hangi şehir/bölge ile ilişkilidir?",
    "options": [
      "Girne",
      "Lefkoşa",
      "Gazimağusa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Yakın Doğu Üniversitesi, genel olarak Lefkoşa ile ilişkilendirilir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-083",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Lefkoşa ile ilişkilendirilen üniversitelerden biri hangisidir?",
    "options": [
      "Girne Amerikan Üniversitesi",
      "Doğu Akdeniz Üniversitesi",
      "Yakın Doğu Üniversitesi",
      "Lefke Avrupa Üniversitesi"
    ],
    "answer": "Yakın Doğu Üniversitesi",
    "explanation": "Yakın Doğu Üniversitesi, Lefkoşa ile ilişkilendirilen yükseköğretim kurumlarından biridir.",
    "source": "Üniversite kurumsal bilgileri ve genel kültür kaynakları"
  },
  {
    "id": "kktc-084",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Doğu Akdeniz Üniversitesi hangi şehir/bölge ile ilişkilidir?",
    "options": [
      "Girne",
      "Gazimağusa",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Gazimağusa",
    "explanation": "Doğu Akdeniz Üniversitesi, genel olarak Gazimağusa ile ilişkilendirilir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-085",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Gazimağusa ile ilişkilendirilen üniversitelerden biri hangisidir?",
    "options": [
      "Lefke Avrupa Üniversitesi",
      "Doğu Akdeniz Üniversitesi",
      "Girne Amerikan Üniversitesi",
      "Yakın Doğu Üniversitesi"
    ],
    "answer": "Doğu Akdeniz Üniversitesi",
    "explanation": "Doğu Akdeniz Üniversitesi, Gazimağusa ile ilişkilendirilen yükseköğretim kurumlarından biridir.",
    "source": "Üniversite kurumsal bilgileri ve genel kültür kaynakları"
  },
  {
    "id": "kktc-086",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Girne Amerikan Üniversitesi hangi şehir/bölge ile ilişkilidir?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Girne",
    "explanation": "Girne Amerikan Üniversitesi, genel olarak Girne ile ilişkilendirilir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-087",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Girne ile ilişkilendirilen üniversitelerden biri hangisidir?",
    "options": [
      "Doğu Akdeniz Üniversitesi",
      "Girne Amerikan Üniversitesi",
      "Yakın Doğu Üniversitesi",
      "Lefke Avrupa Üniversitesi"
    ],
    "answer": "Girne Amerikan Üniversitesi",
    "explanation": "Girne Amerikan Üniversitesi, Girne ile ilişkilendirilen yükseköğretim kurumlarından biridir.",
    "source": "Üniversite kurumsal bilgileri ve genel kültür kaynakları"
  },
  {
    "id": "kktc-088",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Lefke Avrupa Üniversitesi hangi şehir/bölge ile ilişkilidir?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Lefke",
      "Gazimağusa"
    ],
    "answer": "Lefke",
    "explanation": "Lefke Avrupa Üniversitesi, genel olarak Lefke ile ilişkilendirilir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-089",
    "category": "Eğitim",
    "difficulty": "Orta",
    "question": "Lefke ile ilişkilendirilen üniversitelerden biri hangisidir?",
    "options": [
      "Doğu Akdeniz Üniversitesi",
      "Girne Amerikan Üniversitesi",
      "Yakın Doğu Üniversitesi",
      "Lefke Avrupa Üniversitesi"
    ],
    "answer": "Lefke Avrupa Üniversitesi",
    "explanation": "Lefke Avrupa Üniversitesi, Lefke ile ilişkilendirilen yükseköğretim kurumlarından biridir.",
    "source": "Üniversite kurumsal bilgileri ve genel kültür kaynakları"
  },
  {
    "id": "kktc-090",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 90: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Larnaka",
      "Lefke",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-091",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 91: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-092",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Pratik soru 92: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-093",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 93: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-094",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 94: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-095",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 95: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-096",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 96: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "BRT",
      "Cumhuriyet Meclisi",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-097",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 97: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-098",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Pratik soru 98: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-099",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 99: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "1 Ocak 2000",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-100",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 100: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Larnaka",
      "Lefke"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-101",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 101: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-102",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Mini test 102: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-103",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Mini test 103: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-104",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 104: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-105",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 105: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-106",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Pratik soru 106: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-107",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 107: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-108",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 108: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-109",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 109: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-110",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 110: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-111",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 111: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Baf",
      "Larnaka",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-112",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 112: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-113",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 113: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-114",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 114: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Larnaka",
      "Lefkoşa",
      "Lefke"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-115",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 115: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Girne",
      "Larnaka",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-116",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 116: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-117",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 117: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-118",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Mini test 118: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Limasol",
      "Lefke",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-119",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 119: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Başbakanlık",
      "BRT",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-120",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "StarQuiz 120: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Larnaka",
      "Lefke",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-121",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 121: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-122",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 122: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Gazimağusa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-123",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 123: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-124",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 124: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-125",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 125: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Lefke",
      "Larnaka",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-126",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 126: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "İtalyan mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-127",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 127: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Fransız mutfağı",
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-128",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 128: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Lefke",
      "Girne",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-129",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 129: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-130",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 130: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-131",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 131: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Girne",
      "Larnaka",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-132",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 132: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Lefke",
      "Larnaka",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-133",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 133: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-134",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "StarQuiz 134: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-135",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 135: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-136",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 136: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-137",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "StarQuiz 137: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-138",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 138: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-139",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 139: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Lefkoşa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-140",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Genel kültür 140: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "15 Kasım 1983",
      "1 Ocak 2000",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-141",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 141: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Yılbaşı",
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-142",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Mini test 142: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "29 Ekim 1923",
      "15 Kasım 1983",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-143",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Genel kültür 143: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983",
      "1 Ağustos 1976"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-144",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 144: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-145",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 145: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-146",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 146: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-147",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 147: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Güzelyurt",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-148",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 148: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-149",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 149: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-150",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 150: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-151",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 151: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-152",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 152: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-153",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 153: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-154",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 154: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-155",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 155: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "BRT",
      "Başbakanlık",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-156",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 156: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "BRT",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-157",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 157: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-158",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 158: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-159",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 159: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-160",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 160: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-161",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 161: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-162",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 162: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-163",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 163: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-164",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 164: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-165",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 165: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-166",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 166: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Girne",
      "Gazimağusa",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-167",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 167: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Larnaka",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-168",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 168: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-169",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 169: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Güzelyurt",
      "Girne",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-170",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 170: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-171",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 171: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-172",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 172: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-173",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 173: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Lefkoşa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-174",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 174: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ağustos 1976",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-175",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 175: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Girne",
      "Lefkoşa",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-176",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 176: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-177",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 177: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-178",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 178: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-179",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 179: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-180",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 180: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-181",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 181: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-182",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Mini test 182: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-183",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 183: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-184",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 184: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Lefke",
      "Limasol",
      "Larnaka"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-185",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 185: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-186",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 186: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "29 Ekim 1923",
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-187",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 187: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "BRT",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-188",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 188: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-189",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 189: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-190",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 190: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Limasol",
      "Lefke",
      "Larnaka"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-191",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 191: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-192",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Genel kültür 192: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "29 Ekim 1923",
      "15 Kasım 1983",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-193",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 193: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-194",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 194: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-195",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 195: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-196",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 196: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-197",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 197: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Gazimağusa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-198",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 198: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-199",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 199: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-200",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 200: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-201",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 201: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Girne",
      "Larnaka",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-202",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "StarQuiz 202: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-203",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Mini test 203: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Larnaka",
      "Limasol",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-204",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 204: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-205",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 205: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Başbakanlık",
      "BRT",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-206",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 206: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Lefke",
      "Limasol",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-207",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 207: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-208",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 208: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Larnaka",
      "Lefke",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-209",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 209: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-210",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 210: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Lefke",
      "Baf",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-211",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 211: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-212",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Mini test 212: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-213",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 213: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "Dışişleri Bakanlığı",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-214",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 214: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-215",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 215: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-216",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 216: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-217",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 217: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-218",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 218: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-219",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 219: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Larnaka",
      "Girne",
      "Lefke",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-220",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 220: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Lefkoşa",
      "Girne",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-221",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 221: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-222",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 222: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-223",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 223: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Lefke",
      "Girne",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-224",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Genel kültür 224: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-225",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Genel kültür 225: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "Dışişleri Bakanlığı",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-226",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 226: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-227",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 227: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-228",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 228: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-229",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 229: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Larnaka",
      "Girne",
      "Lefke"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-230",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "StarQuiz 230: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Lefke",
      "Baf",
      "Larnaka"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-231",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 231: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-232",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 232: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "İtalyan mutfağı",
      "Çin mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-233",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "StarQuiz 233: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Lefkoşa",
      "Larnaka",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-234",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 234: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-235",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 235: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-236",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 236: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-237",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 237: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Lefke",
      "Larnaka",
      "Baf",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-238",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 238: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Lefke",
      "Larnaka",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-239",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 239: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Yılbaşı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-240",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 240: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Güzelyurt",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-241",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 241: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-242",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 242: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-243",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 243: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-244",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 244: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-245",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 245: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-246",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 246: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Baf",
      "Lefke",
      "Larnaka"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-247",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 247: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-248",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 248: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-249",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 249: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-250",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 250: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "1 Ocak 2000",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-251",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 251: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-252",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 252: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Girne",
      "Larnaka",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-253",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 253: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Yılbaşı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-254",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Genel kültür 254: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "Dışişleri Bakanlığı",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-255",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 255: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-256",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 256: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-257",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 257: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-258",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 258: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Limasol",
      "Baf",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-259",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 259: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-260",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 260: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "1 Ocak 2000",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-261",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 261: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-262",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 262: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-263",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 263: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Lefke",
      "Baf",
      "Limasol",
      "Larnaka"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-264",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Genel kültür 264: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-265",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 265: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ağustos 1976",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-266",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 266: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Güzelyurt",
      "Gazimağusa",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-267",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 267: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-268",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 268: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-269",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 269: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Lefkoşa",
      "Larnaka",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-270",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 270: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-271",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 271: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-272",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 272: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-273",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 273: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-274",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 274: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "BRT",
      "Cumhuriyet Meclisi",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-275",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 275: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-276",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 276: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Yılbaşı",
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-277",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 277: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-278",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 278: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-279",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 279: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-280",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 280: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Lefkoşa",
      "Lefke",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-281",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 281: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-282",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 282: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Çin mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-283",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 283: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-284",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 284: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Lefke",
      "Limasol",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-285",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 285: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-286",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Pratik soru 286: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-287",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 287: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-288",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 288: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-289",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Mini test 289: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-290",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Pratik soru 290: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Girne",
      "Lefkoşa",
      "Gazimağusa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-291",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 291: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-292",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 292: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-293",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 293: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Gazimağusa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-294",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 294: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Lefke",
      "Limasol",
      "Larnaka",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-295",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 295: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Lefke",
      "Baf",
      "Larnaka",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-296",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Pratik soru 296: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "BRT",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-297",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 297: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-298",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "StarQuiz 298: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-299",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 299: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Larnaka",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-300",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 300: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-301",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 301: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-302",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 302: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-303",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Mini test 303: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Lefke",
      "Larnaka",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-304",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 304: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-305",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 305: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-306",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 306: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-307",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 307: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "29 Ekim 1923",
      "15 Kasım 1983",
      "1 Ağustos 1976",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-308",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 308: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Lefke",
      "Lefkoşa",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-309",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 309: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-310",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 310: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-311",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 311: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Lefke",
      "Girne",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-312",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 312: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-313",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 313: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-314",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 314: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-315",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 315: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefke",
      "Girne",
      "Lefkoşa",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-316",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 316: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Güzelyurt",
      "Girne",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-317",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 317: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Lefke",
      "Girne",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-318",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 318: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-319",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 319: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-320",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 320: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-321",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 321: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-322",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 322: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-323",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 323: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Larnaka",
      "Lefke",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-324",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 324: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-325",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 325: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Gazimağusa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-326",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 326: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-327",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Genel kültür 327: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Lefke",
      "Larnaka",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-328",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 328: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-329",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 329: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-330",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Pratik soru 330: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ağustos 1976"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-331",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "StarQuiz 331: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Larnaka",
      "Lefke",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-332",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Pratik soru 332: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-333",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 333: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-334",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Mini test 334: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "BRT",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-335",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 335: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-336",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Pratik soru 336: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-337",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 337: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-338",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 338: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-339",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 339: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-340",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Mini test 340: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Başbakanlık",
      "BRT",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-341",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Pratik soru 341: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Lefkoşa",
      "Gazimağusa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-342",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 342: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "1 Ağustos 1976",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-343",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 343: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Larnaka",
      "Girne",
      "Lefke"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-344",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 344: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-345",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 345: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Baf",
      "Lefke",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-346",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 346: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "29 Ekim 1923",
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "1 Ağustos 1976"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-347",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 347: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-348",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 348: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "29 Ekim 1923",
      "15 Kasım 1983",
      "1 Ağustos 1976",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-349",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 349: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Lefke",
      "Limasol",
      "Larnaka",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-350",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 350: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-351",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 351: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Barış ve Özgürlük Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-352",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 352: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ağustos 1976"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-353",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 353: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-354",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Genel kültür 354: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Lefkoşa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-355",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 355: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-356",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 356: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-357",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 357: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "15 Kasım 1983",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-358",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 358: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-359",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 359: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-360",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 360: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Lefkoşa",
      "Larnaka",
      "Lefke"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-361",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 361: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Girne",
      "Gazimağusa",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-362",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Pratik soru 362: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "BRT",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-363",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 363: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-364",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 364: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Girne",
      "Lefke",
      "Larnaka"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-365",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Genel kültür 365: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-366",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 366: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Larnaka",
      "Lefke",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-367",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 367: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-368",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 368: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-369",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "StarQuiz 369: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-370",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Genel kültür 370: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "29 Ekim 1923",
      "1 Ağustos 1976",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-371",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 371: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "15 Kasım 1983",
      "1 Ağustos 1976",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-372",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 372: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-373",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Genel kültür 373: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "Dışişleri Bakanlığı",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-374",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 374: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-375",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 375: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-376",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 376: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-377",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 377: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-378",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 378: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-379",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 379: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-380",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 380: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-381",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 381: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-382",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 382: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Güzelyurt",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-383",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 383: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-384",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 384: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Larnaka",
      "Lefke",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-385",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 385: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-386",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 386: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-387",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 387: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Larnaka",
      "Lefke",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-388",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 388: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-389",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Pratik soru 389: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-390",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 390: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-391",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 391: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-392",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 392: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-393",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 393: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-394",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 394: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Larnaka",
      "Lefke",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-395",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 395: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "1 Ocak 2000"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-396",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 396: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-397",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 397: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-398",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 398: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-399",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Mini test 399: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "1 Ağustos 1976",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-400",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 400: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-401",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Pratik soru 401: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Lefkoşa",
      "Lefke",
      "Larnaka",
      "Girne"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-402",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 402: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-403",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 403: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-404",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 404: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-405",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 405: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Limasol",
      "Lefke",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-406",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 406: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-407",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 407: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-408",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 408: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Girne",
      "Lefkoşa",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-409",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 409: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-410",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 410: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Lefkoşa",
      "Girne",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-411",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 411: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-412",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 412: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Larnaka",
      "Lefke",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-413",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 413: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-414",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 414: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-415",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 415: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-416",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 416: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-417",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 417: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-418",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 418: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Lefkoşa",
      "Güzelyurt",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-419",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 419: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-420",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 420: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-421",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 421: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-422",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Bilgi kontrolü 422: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Baf",
      "Limasol",
      "Larnaka",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-423",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Bilgi kontrolü 423: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "BRT",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-424",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 424: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-425",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 425: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-426",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Pratik soru 426: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-427",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 427: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-428",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 428: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-429",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 429: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-430",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 430: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Larnaka",
      "Baf",
      "Lefke"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-431",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Pratik soru 431: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-432",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 432: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-433",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 433: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-434",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 434: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Girne",
      "Güzelyurt",
      "Lefkoşa",
      "Gazimağusa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-435",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 435: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-436",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 436: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-437",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 437: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-438",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Genel kültür 438: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-439",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 439: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-440",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 440: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-441",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "StarQuiz 441: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-442",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 442: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı",
      "Fransız mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-443",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 443: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-444",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Pratik soru 444: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "BRT",
      "Başbakanlık",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-445",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 445: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-446",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 446: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-447",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Hızlı tekrar 447: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-448",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 448: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-449",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 449: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "Japon mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-450",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 450: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Zafer Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-451",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 451: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-452",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 452: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-453",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "StarQuiz 453: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-454",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 454: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Lefkoşa",
      "Girne"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-455",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 455: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-456",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 456: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "1 Ocak 2000",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-457",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 457: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Türk Ajansı Kıbrıs",
      "Bayrak Radyo Televizyon Kurumu",
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-458",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 458: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-459",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 459: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-460",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 460: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Zafer Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-461",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 461: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-462",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 462: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Çin mutfağı",
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-463",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 463: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-464",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 464: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "15 Kasım 1983",
      "29 Ekim 1923",
      "20 Temmuz 1974"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-465",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 465: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Meksika mutfağı",
      "Japon mutfağı",
      "Kıbrıs kültürü ve mutfağı",
      "İskandinav mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-466",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 466: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Zafer Bayramı",
      "Yılbaşı",
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-467",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 467: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "Meksika mutfağı",
      "İskandinav mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-468",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 468: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Lefkoşa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-469",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 469: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Cumhuriyet Bayramı",
      "Yılbaşı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-470",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "StarQuiz 470: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Yüksek Seçim Kurulu",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-471",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Seviye alıştırması 471: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Çin mutfağı",
      "Kıbrıs mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-472",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 472: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Yılbaşı",
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı",
      "Cumhuriyet Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-473",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Mini test 473: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Yılbaşı",
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-474",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 474: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "20 Temmuz 1974",
      "15 Kasım 1983",
      "29 Ekim 1923"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-475",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Konu pekiştirme 475: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Dışişleri Bakanlığı",
      "Cumhuriyet Meclisi",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-476",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Genel kültür 476: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "Kıbrıs mutfağı",
      "Çin mutfağı",
      "Fransız mutfağı",
      "İtalyan mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-477",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Kamu sınavı hazırlık 477: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Başbakanlık",
      "BRT",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-478",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Genel kültür 478: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Toplumsal Direniş Bayramı",
      "Türkiye Cumhuriyet Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-479",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 479: Şeftali kebabı hangi mutfakla ilişkilidir?",
    "options": [
      "İtalyan mutfağı",
      "Fransız mutfağı",
      "Kıbrıs mutfağı",
      "Çin mutfağı"
    ],
    "answer": "Kıbrıs mutfağı",
    "explanation": "Doğru cevap Kıbrıs mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-480",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "StarQuiz 480: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Limasol",
      "Larnaka",
      "Lefke",
      "Baf"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-481",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "StarQuiz 481: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Dışişleri Bakanlığı",
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-482",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Genel kültür 482: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Güzelyurt",
      "Gazimağusa",
      "Girne",
      "Lefkoşa"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-483",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Genel kültür 483: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Başbakanlık",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "BRT"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-484",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 484: Aşağıdakilerden hangisi KKTC ilçeleri arasında yer alır?",
    "options": [
      "Larnaka",
      "Lefke",
      "Baf",
      "Limasol"
    ],
    "answer": "Lefke",
    "explanation": "Doğru cevap Lefke. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-485",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 485: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi",
      "Yüksek Seçim Kurulu"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-486",
    "category": "Tarih",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 486: Kıbrıs Barış Harekâtı hangi tarihle ilişkilidir?",
    "options": [
      "29 Ekim 1923",
      "20 Temmuz 1974",
      "1 Ocak 2000",
      "15 Kasım 1983"
    ],
    "answer": "20 Temmuz 1974",
    "explanation": "Doğru cevap 20 Temmuz 1974. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-487",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 487: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Barış ve Özgürlük Bayramı",
      "Yılbaşı",
      "Cumhuriyet Bayramı",
      "Zafer Bayramı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-488",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Kamu sınavı hazırlık 488: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Girne",
      "Lefkoşa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-489",
    "category": "Kültür",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 489: Hellim en çok hangi kültür/mutfak bağlamında bilinir?",
    "options": [
      "Japon mutfağı",
      "İskandinav mutfağı",
      "Meksika mutfağı",
      "Kıbrıs kültürü ve mutfağı"
    ],
    "answer": "Kıbrıs kültürü ve mutfağı",
    "explanation": "Doğru cevap Kıbrıs kültürü ve mutfağı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-490",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 490: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Başbakanlık",
      "BRT",
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-491",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "StarQuiz 491: 1 Ağustos KKTC'de hangi gün olarak bilinir?",
    "options": [
      "Türkiye Cumhuriyet Bayramı",
      "Toplumsal Direniş Bayramı",
      "Yılbaşı",
      "Zafer Bayramı"
    ],
    "answer": "Toplumsal Direniş Bayramı",
    "explanation": "Doğru cevap Toplumsal Direniş Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-492",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Seviye alıştırması 492: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs",
      "Yüksek Seçim Kurulu",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-493",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 493: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Gazimağusa",
      "Lefkoşa",
      "Girne",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-494",
    "category": "Resmi Günler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 494: 20 Temmuz KKTC'de hangi bayramla ilişkilidir?",
    "options": [
      "Cumhuriyet Bayramı",
      "Barış ve Özgürlük Bayramı",
      "Zafer Bayramı",
      "Yılbaşı"
    ],
    "answer": "Barış ve Özgürlük Bayramı",
    "explanation": "Doğru cevap Barış ve Özgürlük Bayramı. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-495",
    "category": "Coğrafya",
    "difficulty": "Kolay",
    "question": "Hızlı tekrar 495: Aşağıdakilerden hangisi KKTC ilçesi değildir?",
    "options": [
      "Girne",
      "Larnaka",
      "Lefke",
      "Lefkoşa"
    ],
    "answer": "Larnaka",
    "explanation": "Doğru cevap Larnaka. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-496",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Tekrar sorusu 496: KKTC genel bilgilerinde başkent olarak hangi şehir geçer?",
    "options": [
      "Girne",
      "Gazimağusa",
      "Lefkoşa",
      "Güzelyurt"
    ],
    "answer": "Lefkoşa",
    "explanation": "Doğru cevap Lefkoşa. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-497",
    "category": "Devlet Yapısı",
    "difficulty": "Orta",
    "question": "Genel kültür 497: KKTC'de yasama organı olarak bilinen kurum hangisidir?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "BRT",
      "Başbakanlık"
    ],
    "answer": "Cumhuriyet Meclisi",
    "explanation": "Doğru cevap Cumhuriyet Meclisi. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-498",
    "category": "Temel Bilgiler",
    "difficulty": "Kolay",
    "question": "Konu pekiştirme 498: KKTC'nin ilan tarihi aşağıdakilerden hangisidir?",
    "options": [
      "1 Ağustos 1976",
      "20 Temmuz 1974",
      "29 Ekim 1923",
      "15 Kasım 1983"
    ],
    "answer": "15 Kasım 1983",
    "explanation": "Doğru cevap 15 Kasım 1983. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-499",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Tekrar sorusu 499: TAK hangi kurumun kısaltmasıdır?",
    "options": [
      "Cumhuriyet Meclisi",
      "Dışişleri Bakanlığı",
      "Bayrak Radyo Televizyon Kurumu",
      "Türk Ajansı Kıbrıs"
    ],
    "answer": "Türk Ajansı Kıbrıs",
    "explanation": "Doğru cevap Türk Ajansı Kıbrıs. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  },
  {
    "id": "kktc-500",
    "category": "Medya",
    "difficulty": "Orta",
    "question": "Mini test 500: BRT hangi kurumun kısaltmasıdır?",
    "options": [
      "Bayrak Radyo Televizyon Kurumu",
      "Yüksek Seçim Kurulu",
      "Türk Ajansı Kıbrıs",
      "Cumhuriyet Meclisi"
    ],
    "answer": "Bayrak Radyo Televizyon Kurumu",
    "explanation": "Doğru cevap Bayrak Radyo Televizyon Kurumu. Bu soru KKTC genel kültür temel bilgilerini pekiştirmek için eklenmiştir.",
    "source": "KKTC Enformasyon Dairesi ve resmi kurum bilgileri"
  }
];
