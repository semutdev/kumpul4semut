---
title: "Setting antigravity pada claude code CLI"
description: "Cara setup antigravity pada claude code CLI"
pubDate: 2025-12-22T19:21:56+00:00
heroImage: ""
tags: ['AI', 'claude', 'vibecoding', 'agent ai']
draft: true
---

## Cerita mulai pakai agent ai untuk coding
Akhir akhir ini saya lagi coba memanfaatkan AI untuk membantu saya dalam proses koding. Saya sudah coba beberapa agent AI mulai dari github copilot, qursor, blackbox ai dan yang paling saya suka yaitu claude code khusunya claude code CLI.

Dulu saya agak skeptis dengan hadirnya github copilot yang mana bisa otomatis melajutkan kode yang saya buat bahkan saat saya baru membuat komentar pada kodenya. Github copilot sudah tahu apa yang mau saya buat. Tapi kode yang di buat copilot kadang masih suka salah makanya saya gak lanjutkan karena waktu itu proses googleing dan nyari di tutorial masih lebih memudahkan dan akurat.

Terus setelah munculnya AI yang awal yaitu chatgpt terus di lanjut adanya qursor saya mulai khawatir karena wah AI sekarang sudah bisa koding sendiri jadi tidak perlu programmer. Dan saya yang notabene programer otodidak yang ngoding bukan sekedar jadi tapi kaya hobi dan kalo sehari gak ngoding kaya ada yang kurang merasa bakal tersaingi.

Sampai akhirnya saya coba blackbox ai sebagai agent di VS code saya dan saya kagum karena bisa langsung jadi. Disitu ketakukan saya makin meningkat tapi saya sadar bahwa saya sebagai programer harus beradabtasi dengan tools baru ini.

## Keterbatasan Laptop
Laptop yang saya gunakan untuk ngoding yaitu macbook pro 2012 yang mana laptop ini merupakan laptop jadul tapi masih powerpull kalo untuk kerja terutama ngoding. Tapi di Tahun ini ada 1 masalah pada laptop ini yaitu OS nya yang mentok di chatalina atau mac os versi 10 dan sialnya tools untuk koding terbaru mewajibkan minimal mac os versi 12 seperti google chrome, VScode, Postman dan yang paling baru antigravity dari google.

Karena saya belum ada budget buat upgrade laptop makannya saya nyari nyari solusi agar saya tetap bisa belajar agent ai dengan laptop saya ini. Dan ketemulah claude CLI yang ringan banget saya pun coba langganan sampai 3 bulan karena pas itu lagi ada potongan harga 50%.

Setelah 3 bulan pakai claude code cli untuk bantu ngoding saya entah itu buat aplikasi baru atau update aplikasi lama merasa terbantu banget dan bisa mempercepat pekerjaan saya. namun setelah kembali ke harga normal kayanya saya belum sanggup buat langganan si claude code ini. gak tahu nanti mungkin kalo ada rezeky saya bakal langganan lagi.

## Muncul antigravity dengan gratis claude sonnet
Pada bulan november 2025 google meluncurkan code editor bernama antigravity dengan model gemini dan cluade gratis. Tapi sayangnya laptop saya dengan OS mac versi 10 tidak bisa menginstallnya. Tapi saya bisa coba di PC window dan linux saya tapi saya sukanya emang di laptop mac os 10 saya ini.Dan akhirnya saya menemukan solusi yang pas banget dengan masalah saya. 

## Menjalankan OS linux di mac os tanpa dual boot
Masalah laptop saya sebenarnya hanya di OS nya saja. Saya sebenarnya bisa update non official mac saya menjadi mac os 12 dengan open patcher tapi kekurangannya laptop saya jadi lebih ngelag performance nya. Terus bisa juga dual boot dengan ubuntu versi terbaru yang mendukung tools2 koding versi baru tapi masalahnya ribet gonta ganti OS.

Terus saya menemukan bagaimana saya bisa menjalankan linux di mac os tanpa dual boot. Dan ini seperti pakai WSL di window jadi langsung jalan. terus kebutuhannya dari linux sebenarnya command line nya juga cukup.

Sampai akhirnya saya menemukan yang namanya [multipass](https://github.com/canonical/multipass) . Multipass ini memungkinkan kita menjalankan envirovment linux di mac dan cara install dan pakainya juga cukup mudah.

### Install multipass
```bash
brew install multipass
```

### cliproxyapi

### run cliproxy
```bash
./cli-proxy-api serve --listen 0.0.0.0:8317 --config config.yaml
```

#### Ambil list models
```bash
curl http://localhost:8317/v1/models \
  -H "Authorization: Bearer [TOKEN]" | jq
```

#### Chat ke models
```bash
curl http://localhost:8317/v1/chat/completions \
  -H "Authorization: Bearer [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-claude-sonnet-4-5",
    "messages": [
      {"role": "user", "content": "apa itu php"}
    ]
  }'
```

### Clude code
#### Setting claude code
Setting file *~/.claude/settings.json
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-local-123",
    "ANTHROPIC_BASE_URL": "http://localhost:8317",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "gemini-3-pro-preview",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "gemini-3-pro-preview",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "gemini-claude-sonnet-4-5"
  },
  "model": "opus"
}
```