// API Lo
const apiKey = 'YOUR-API-KEY';
// Ganti ini dengan ID channel yang mau lo cek infonya
const channelId = 'ID Channel';

async function getChannelInfo() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    
    // Cek apakah response dari server sukses
    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }
    
    const data = await response.json();
    
    // Ambil nama channel, jumlah subscriber, jumlah video, dan deskripsi dari data yang didapat
    const channelName = data.items[0].snippet.title;
    const subscriberCount = data.items[0].statistics.subscriberCount;
    const videoCount = data.items[0].statistics.videoCount;
    const channelDescription = data.items[0].snippet.description;
    
    console.log(`Nama Channel: ${channelName}`);
    console.log(`Jumlah Subscriber: ${subscriberCount}`);
    console.log(`Jumlah Video: ${videoCount}`);
    console.log(`Deskripsi Channel: ${channelDescription}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Panggil fungsi untuk cek informasi channel
getChannelInfo();
