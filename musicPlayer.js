
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Ngăn chặn sự kiện load lại trang khi click vô thẻ a
 const aElements = document.getElementsByTagName('a');
    for(i = 0; i < aElements.length; i++) {
        aElements[i].onclick = function(e) {
            e.preventDefault();
        }
    }
   

// user-select

const userSelect = $('.user-select');
const selectList = $('.select-list');
let isSelect = false;

userSelect.addEventListener('click', (e) => {
    if(!isSelect) {
        selectList.style.display = 'flex';
        isSelect = true;
    }else {
        selectList.style.display = 'none';
        isSelect = false;
    }
})

// active-notify

const notify = $('.active-notify');
const notifyList = $('.active-notify-list');
let isNotify = false;

notify.addEventListener('click', () => {
    if(!isNotify) {
        notifyList.style.display = 'flex';
        isNotify = true;
    }else {
        notifyList.style.display = 'none';
        isNotify = false;
    }
})

// active-setting

const setting = $('.active-setting');
const settingList = $('.active-setting-list');
let isSetting = false;

setting.addEventListener('click', () => {
    if(!isSetting) {
        settingList.style.display = 'flex';
        isSetting = true;
    }else {
        settingList.style.display = 'none';
        isSetting = false;
    }
})

// Slider

const sliderMain = $('.product-artists-slider-main');
const sliderItems = $$('.product-artists-slider-main-item');
const dotItems =$$('.slider-dot-item');

const sliderItemLength = sliderItems.length;
const sliderItemWidth = sliderItems[0].offsetWidth;
let indexItem = 0;
let positionX = 0;

[...dotItems].forEach((item) => {
    item.addEventListener('click', (e) => {
        [...dotItems].forEach((dotItem) => {
            dotItem.classList.remove('slider-dot-item-active');
        })
        e.target.classList.add('slider-dot-item-active');
        indexItem = parseInt(e.target.dataset.index);
        positionX = -1 * indexItem * sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
    })
})


//  Music-Player

const cd = $('.cd');
const cdThumb =$('.cd-thumb');
const audioName = $('.audio-info-name');
const audioAuthor = $('.audio-info-author');
const audioCurrentTime = $('.time-current');
const audioDurationTime = $('.time-duration');
const repeatBtn = $('.btn-repeat');
const randomBtn = $('.btn-random');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const playBtn = $('.btn-toggle-play');
const audio = $('.audio');
const playlist = $('.playlist');
const progress = $('.progress');

const apps = {
    songs: [
        {
            id: '01',
            name: 'Lalisa',
            singer: 'Lisa (BlackPink)',
            image: './asset/imgs/songer-Lisa-lalisa.jpg',
            path: './asset/audios/Lalisa-LISA.mp3',
        },
        {
            id: '02',
            name: 'On The Ground',
            singer: 'Rosé (BlackPink)',
            image: './asset/imgs/songer-Rose-on\ the\ ground.jpg',
            path: './asset/audios/OnTheGround-ROSE.mp3',
        },
        {
            id: '03',
            name: 'Sao Cũng Được',
            singer: 'Quang Đạt',
            image: './asset/imgs/Songer-Quang\ Đạt.jpg',
            path: './asset/audios/Sao Cũng Được.mp4',
        },
        {
            id: '04',
            name: 'Mùa Oải Hương Năm Ấy',
            singer: 'Phạm Hồng Phước',
            image: './asset/imgs/songer-phạm\ hồng\ phước-mohnay.jpg',
            path: './asset/audios/MuaOaiHuongNamAy-PhamHongPhuoc.mp3',
        },
        {
            id: '05',
            name: 'Bông Hoa Đẹp Nhất',
            singer: 'Quân AP',
            image: './asset/imgs/songger-bhđn-quân\ ap.jpg',
            path: './asset/audios/BongHoaDepNhat-QuanAP.mp3',
        },
        {
            id: '06',
            name: 'Day Dứt Nỗi Đau',
            singer: 'Mr Siro',
            image: './asset/imgs/songer-mrSiro-day\ dứt\ nỗi\ đau.jpg',
            path: './asset/audios/Day-Dut-Noi-Dau-Mr-Siro.mp3',
        },
        {
            id: '07',
            name: 'Lời Xin Lỗi Vụng Về',
            singer: 'Quân AP',
            image: './asset/imgs/songger-Quân-ap-\ lời\ xin\ lỗi\ vụng\ về.jpg',
            path: './asset/audios/LoiXinLoiVungVe-QuanAP.mp3',
        },
        {
            id: '08',
            name: 'Tự Tình 2',
            singer: 'Lâm Nguyễn',
            image: './asset/imgs/songer-lâm\ nguyễn-tự\ tình\ 2.jpg',
            path: './asset/audios/TuTinh2-LamNguyen.mp3',
        },
        {
            id: '09',
            name: 'Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh',
            singer: 'Erik',
            image: './asset/imgs/songger-erik-cvkva.jpg',
            path: './asset/audios/YeuDuongKhoQuaThiChayVeKhocVoiAnh-ERIK.mp3',
        },
        {
            id: '10',
            name: 'Đế Vương',
            singer: 'Đình Dũng ACV',
            image: './asset/imgs/songger-đình\ dũng-đế\ vương.jpg',
            path: './asset/audios/DeVuong-DinhDungACV.mp3',
        },
        {
            id: '11',
            name: 'Shape Of You',
            singer: 'Ed Sheeran',
            image: './asset/imgs/singer-shape_of_you.jpg',
            path: './asset/audios/Shape-Of-You-Cover-Niki-Nhi-Ha.mp3',
        },
        {
            id: '12',
            name: 'Betrayal',
            singer: 'Yao Si Ting',
            image: './asset/imgs/singer-yao-si-ting-betrayal.jpg',
            path: './asset/audios/Betrayal-Yao-Si-Ting.mp3',
        },
        {
            id: '13',
            name: 'Hơn Cả Mây Trời',
            singer: 'Việt',
            image: './asset/imgs/singer-việt-hơn\ cả\ mây\ trời.jfif',
            path: './asset/audios/Hon-Ca-May-Troi-TempFileGetLink.mp3',
        },
        {
            id: '14',
            name: 'Nơi Này Có Anh',
            singer: 'Sơn Tùng MTP',
            image: './asset/imgs/singer-sơn\ tùng-nơi\ này\ có\ anh.jpg',
            path: './asset/audios/Noi-Nay-Co-Anh-Masew-Bootleg-Son-Tung-M-TP-Masew.mp3',
        },
        {
            id: '15',
            name: 'Sofar',
            singer: 'Binz',
            image: './asset/imgs/singer-binz-sofar.jpg',
            path: './asset/audios/SOFAR-Binz.mp3',
        },
        {
            id: '16',
            name: 'Mình Xa Mình yêu',
            singer: 'Juun D',
            image: './asset/imgs/singer-junn\ D-mình\ xa\ mình\ yêu.jfif',
            path: './asset/audios/Minh-Xa-Minh-Yeu-JUUN-D.mp3',
        },
        {
            id: '17',
            name: 'Thằng Điên',
            singer: 'Justatee-Phương Ly',
            image: './asset/imgs/singer-justatee-thằng\ điên.jpg',
            path: './asset/audios/Thằng Điên - Justatee ft Phương Ly.mp3',
        },
        {
            id: '18',
            name: 'Yêu Như Ngày Yêu Cuối',
            singer: 'Mai Tiến Dũng',
            image: './asset/imgs/singer-mai\ tiến\ dũng-ynnyc.jpg',
            path: './asset/audios/Yêu như ngày yêu cuối - Mai tiến dũng.mp3',
        },
        {
            id: '19',
            name: 'Nhạt',
            singer: 'Phan Mạnh Quỳnh',
            image: './asset/imgs/singer-phan\ mạnh\ quỳnh-nhạt.jpg',
            path: './asset/audios/Nhat-Phan-Manh-Quynh.mp3',
        },
        {
            id: '20',
            name: 'Tình Đẹp Đến Mấy Cũng Tàn',
            singer: 'Việt',
            image: './asset/imgs/singer-việt-tình\ đẹp\ đến\ mấy\ cũng\ tàn.jfif',
            path: './asset/audios/Tình Đẹp Đến Mấy Cũng Tàn - Việt.mp3',
        },
        {
            id: '21',
            name: 'Độ Tộc 2',
            singer: 'Độ Mixi - Phúc Du - Táo',
            image: './asset/imgs/singer-dộ\ tộc\ 2-mixi.jpg',
            path: './asset/audios/Do-Toc-2-Do-Mixi-Phao-Phuc-Du-Masew.mp3',
        },
        {
            id: '22',
            name: 'Girls Like You',
            singer: 'Maroon 5',
            image: './asset/imgs/singer-girls\ like\ you.jfif',
            path: './asset/audios/Girls Like You Maroon 5-Cardi B.mp3',
        },
        {
            id: '23',
            name: 'Infinity',
            singer: 'Jaymes Young',
            image: './asset/imgs/singer-Jaymes-Young-Infinity.jpg',
            path: './asset/audios/Infinity-Jaymes Young.mp3',
        },
        {
            id: '24',
            name: 'Let Me Down Slowly',
            singer: 'Alec Benjamin',
            image: './asset/imgs/singer-let\ me\ down\ slowly.jpg',
            path: './asset/audios/Let Me Down Slowly - Alec Benjamin.mp3',
        },
        {
            id: '25',
            name: 'Tối',
            singer: 'Dkayz - Brian',
            image: './asset/imgs/singer-tối-dkayz-brian.jpg',
            path: './asset/audios/Tối - Dkayz - Chulong.mp3',
        },
        {
            id: '26',
            name: 'BigCityBoi',
            singer: 'Binz',
            image: './asset/imgs/singer-bigcityboy-binz.jpg',
            path: './asset/audios/BIGCITYBOI-BINZ-TOULIVER.mp3',
        },
        {
            id: '27',
            name: 'Mình Yêu Nhau Từ Kiếp Nào',
            singer: 'Quang Trung',
            image: './asset/imgs/singer-quang\ trung-myntkn.jpg',
            path: './asset/audios/MÌNH YÊU NHAU TỪ KIẾP NÀO - QUANG TRUNG COVER.mp3',
        },
        {
            id: '28',
            name: 'Ai Cũng Có Ngày Xưa',
            singer: 'Phan Mạnh Quỳnh',
            image: './asset/imgs/singer-ai\ cũng\ có\ ngày\ xưa-phan\ mạnh\ quỳnh.jpg',
            path: './asset/audios/ Ai Cũng Có Ngày Xưa  Phan Mạnh Quỳnh Lyrics (1).mp3',
        },
        {
            id: '29',
            name: 'Lối Nhỏ',
            singer: 'Đen - Phương Anh Đào',
            image: './asset/imgs/singer-lối\ nhỏ-đen\ vâu.jpg',
            path: './asset/audios/Lối Nhỏ  Lyrics  Đen Vâu ft Phương Anh Đào.mp3',
        },
        {
            id: '30',
            name: 'Mang Tiền Về Cho Mẹ',
            singer: 'Đen - Nguyên Thảo',
            image: './asset/imgs/singer-mang\ tiền\ về\ cho\ mẹ-đen.jpg',
            path: './asset/audios/Mang Tiền Về Cho Mẹ -  Đen ft Nguyên Thảo MV.mp3',
        },
    ],

    currentIndex: 0,

    isPlaying: false,

    isRepeat: false,

    isRandom: false,

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'song-active' : ''}" data-index="${index}">
            <div class="song-number">${song.id}</div>
            <div class="song-thumb" style="background-image: url('${song.image}')"></div>
            <div class="song-info">
                <div class="song-info-name">${song.name}</div>
                <div class="song-info-author">${song.singer}</div>
            </div>
            <div class="song-option">
                <div class="song-option-suggest">
                    <i class="fa-solid fa-microphone"></i>
                    <span class="option-suggest-title">Phát cùng lời bài hát</span>
                </div>
                <div class="song-option-suggest">
                    <i class="fa-regular fa-heart"></i>
                    <span class="option-suggest-title">Thêm vào thư viện</span>
                </div>
                <div class="song-option-suggest">
                    <i class="fa-solid fa-ellipsis"></i>
                    <span class="option-suggest-title">Khác</span>
                </div>
            </div>
        </div>
            `
        })
        playlist.innerHTML = htmls.join('');

    },

    defineProperties: function () {
        Object.defineProperties(this, {
            currentSong: {
                get: function () {
                    return this.songs[this.currentIndex]
                }
            }
        }
    )},

    displayTimer: function () {
        audio.addEventListener('timeupdate', () => {
            function formatTimer(number) {
                const minutes = Math.floor(number / 60);
                const seconds = Math.floor(number % 60);
                if(seconds < 10) {
                    return `${minutes}:0${seconds}`;
                }else {
                    return `${minutes}:${seconds}`;
                }
            }
            if(!audio.duration) {
                audioDurationTime.textContent = ' ';
                audioCurrentTime.textContent = '00:00';
            }else {
                audioDurationTime.textContent = formatTimer(audio.duration);
                audioCurrentTime.textContent = formatTimer(audio.currentTime);
            } 
        })
    },

    loadCurrentSong: function () {
        audioName.textContent = this.currentSong.name;
        audioAuthor.textContent = this.currentSong.singer;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    handleEvent: function () {
        const _this = this;

        // Quay / dừng CD
        const cdThumbAnimate = cd.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 8000,
            iterations: Infinity,
        })
        cdThumbAnimate.pause();

        // Play / Pause audio;
        playBtn.addEventListener('click', () => {
            if(!_this.isPlaying) {
                audio.play();
            }else {
                audio.pause();
            }
        })

        // Audio Khi được play
        audio.addEventListener('play', () => {
            playBtn.classList.add('btn-playing');
            cdThumbAnimate.play();
            _this.isPlaying = true;
        })

        // Audio khi bị pause
        audio.addEventListener('pause', () => {
            playBtn.classList.remove('btn-playing');
            cdThumbAnimate.pause();
            _this.isPlaying = false;
        })

        // Xử lí khi tiến độ bài hát thay đổi hoặc tua 
        audio.addEventListener('timeupdate', () => {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }else {
                progress.addEventListener('change', (e) => {
                    const seekTime = (e.target.value / 100) * (audio.duration);
                    audio.currentTime = seekTime;
                })
            }
        })

        // Next Song
        nextBtn.addEventListener('click', () => {
            if(_this.isRandom) {
                _this.radomSong();
            }else{
                _this.nextSong();
            }
        })

        // Prev Song
        prevBtn.addEventListener('click', () => {
            if(_this.isRandom) {
                _this.radomSong();
            }else{
                _this.prevSong();
            }
        })

        // Repeat Song
        repeatBtn.addEventListener('click', () => {
            if(!_this.isRepeat) {
                repeatBtn.classList.add('btn-active');
                _this.repeatSong();
                _this.isRepeat = true;
            }else {
                repeatBtn.classList.remove('btn-active');
                _this.isRepeat = false;
            }
        })
        
        // Random song
        randomBtn.addEventListener('click', () => {
            if(!_this.isRandom) {
                randomBtn.classList.add('btn-active');
                _this.isRandom = true;
            }else {
                randomBtn.classList.remove('btn-active');
                _this.isRandom = false;
            }
        })

        // Xử lí khi phát xong bài hát
        audio.addEventListener('ended', () => {
            if(_this.isRepeat) {
                audio.play();
            }else {
                _this.nextSong();
            }
        })

        // Khi click vào playlist để chọn bài hát
        playlist.addEventListener('click', (e) => {
            const nodeSong = e.target.closest('.song:not(.song-active)');
            if(nodeSong && !e.target.closest('.song-option')) {
                _this.currentIndex = parseInt(nodeSong.dataset.index);
                _this.loadCurrentSong();
                _this.scrollToActiveSong();
                _this.render();
                audio.play();
            }
        })

    },

    repeatSong: function () {
        audio.play();
    },

    radomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        audio.play();
    },

    nextSong: function () {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.scrollToActiveSong();
        this.render();
        audio.play();
    },

    prevSong: function () {
        this.currentIndex--;
        if(this.currentIndex <= -1) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        this.scrollToActiveSong();
        this.render();
        audio.play();
    },

    scrollToActiveSong: function () {
        setTimeout( () => {
            $('.song-active').scrollIntoView();
        }, 500)
    },

    start: function() {
        this.render();
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvent();
        this.displayTimer();
    }
};
apps.start();

// Xử Lí Play / Pause radio

const radioItems = $$('.radio-slider-main-item');
let radioPlaying = false;

// console.log(radioItems, radioControls, radioAudio);

function handleplay(radioItem) {
    const radioAudio = radioItem.querySelector('.radio-song');
    const radioControl = radioItem.querySelector('.radio-control');
    if(!radioPlaying) {
        radioAudio.play();
        radioControl.classList.add('radio-playing');
        radioPlaying = true;
    }else {
        radioAudio.pause();
        radioControl.classList.remove('radio-playing');
        radioPlaying = false;
    }
}

//  Xử lí Play / Pause song phần Songchart

let songItemPlaying = false;
function playMusic(songItem) {
    const songItemAudio = songItem.parentElement.querySelector('.hit-song');
    const itemControl = songItem.querySelector('.item-control');
    if (!songItemPlaying) {
        songItemAudio.play();
        itemControl.classList.add('item-song-play');
        songItemPlaying = true;
    }else {
        songItemAudio.pause();
        itemControl.classList.remove('item-song-play');
        songItemPlaying = false;
    }
}

//  Xử lí chartSong
const ctx = document.getElementById('chart').getContext('2d');
        let X = ['08:00', '10:00', '12:00', '14:00' ,'16:00', '18:00', '20:00', '22:00', '00:00', '02:00','04:00', '06:00'];
        let Y1 = [0.6, 1, 1.5, 2, 2.1, 2.2, 2.4, 2.2, 2, 1.9, 1.6, 0.4];
        let Y2 = [1, 1.4, 1.7, 2.1, 2.5, 2.6, 2.3, 2.1, 1.9, 1.5, 1.1, 0.9];
        let Y3 = [1.2, 1.6, 1.9, 2.3, 2.7, 2.8, 3, 2.8, 2.6, 1.8, 1.5, 1];
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: X,
                datasets: [{
                    label: 'Memories - Maroon 5',
                    data: Y1,
                    backgroundColor: '#fff',
                    borderColor: '#27c940',
                    boderWidth: '1',
                },
                {
                    label: 'Ddu-Du Ddu-Du - BlackPink',
                    data: Y2,
                    backgroundColor: '#fff',
                    borderColor: '#febd2f',
                    boderWidth: '1',
                },
                {
                    label: 'Mười Năm - Đen',
                    data: Y3,
                    backgroundColor: '#fff',
                    borderColor: '#fe5f57',
                    boderWidth: '1',
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }
        })