import D2DModel from '@/components/img/Product/3D2DModel.webp'
import BIMModel from '@/components/img/Product/BIMRevit.webp'
import Rendering from '@/components/img/Product/Rendering.webp'
import PrivateCore from '@/components/img/Product/PrivatCore.webp'
import PrivateBuild from '@/components/img/Product/PrivatBuild.webp'
import PrivatePro from '@/components/img/Product/PrivatPro.webp'
import MentorshipPrivat from '@/components/img/Product/MentorshipPrivat.webp'
import MentorshipKelompok from '@/components/img/Product/MentorshipKelompok.webp'

export const categories = ['All', 'Studio Class', 'Private Class', 'Mentorship']

export const products = [
    {
       id : 1 ,
       title : '3D & 2D Modeling Course' ,
       img: D2DModel,
       category:'Studio Class',
       tool:'Autocad , SketchUp , Rhineceros , dll',
       price1:'Rp 460.000',
       price2:'Rp 460.000',
       price3:'Rp 630.000',
       time1:'± 5 Hari (10 Jam)',
       time2:'± 5 Hari (10 Jam)',
       time3:'± 5 Hari (10 Jam)',
       description:'Kelas berkelompok 3–5 orang yang dirancang untuk belajar interaktif dan kolaboratif, dengan pelatihan penguasaan penggambaran dan permodelan arsitektur 2D dan 3D menggunakan software standar industri',
    },
    {
        id: 2,
        title: ' BIM Modeling Course ',
        img: BIMModel,
        category:'Studio Class',
        tool: 'Autodesk Revit , ArchiCAD , Navisworks, dll',
        price1:'Rp 575.000',
        price2:'Rp 575.000',
        price3:'Rp 750.000',
        time1:'± 5 Hari (10 Jam)',
        time2:'± 5 Hari (10 Jam)',
        time3:'± 5 Hari (10 Jam)',
        description:'Kelas berkelompok 3–5 orang yang dirancang untuk belajar interaktif dan kolaboratif, dengan pelatihan penguasaan BIM meliputi pemodelan parametrik 3D, manajemen data bangunan, serta penyusunan dokumen konstruksi terintegrasi',
    },    
    {
        id: 3,
        title: 'Rendering & Editing Course',
        img: Rendering,
        category:'Studio Class',
        tool: 'Adobe Photosop , Illustrator , dll',
        price1:'Rp 750.000',
        price2:'Rp 750.000',
        price3:'Rp 950.000',
        time1:'± 5 Hari (10 Jam)',
        time2:'± 5 Hari (10 Jam)',
        time3:'± 5 Hari (10 Jam)',
        description:'Kelas berkelompok 3–5 orang yang dirancang untuk belajar interaktif dan kolaboratif, dengan pelatihan penguasaan visualisasi arsitektur meliputi rendering dan post-production untuk presentasi desain yang profesional',
    },
    {
        id: 4,
        title: 'Private Core Class',
        img: PrivateCore,
        category: 'Private Class',
        tool: 'Semua Software',
        price1: 'Rp 599.000',
        price2: 'Rp 780.000',
        price3: 'Rp 950.000',
        time1: '6 jam (± 3 Hari)',
        time2: '8 jam (± 4 Hari)',
        time3: '10 jam (± 5 Hari)',
        description: 'Belajar secara personal dan intensif dengan jadwal fleksibel. Anda bebas memilih satu materi utama sesuai kebutuhan spesifik Anda.'
    },
    {
        id: 5,
        title: 'Private Build Class',
        img: PrivateBuild,
        category: 'Private Class',
        tool: 'Semua Software',
        price1: 'Rp 599.000',
        price2: 'Rp 780.000',
        price3: 'Rp 950.000',
        time1: '6 jam (± 3 Hari)',
        time2: '8 jam (± 4 Hari)',
        time3: '10 jam (± 5 Hari)',
        description: 'Belajar secara personal dan intensif dengan jadwal fleksibel. Anda bebas memilih satu materi utama sesuai kebutuhan spesifik Anda.'
    },
    {
        id: 6,
        title: 'Private Pro Class',
        img: PrivatePro,
        category: 'Private Class',
        tool: 'Semua Software',
        price1: 'Rp 689.000',
        price2: 'Rp 899.000',
        price3: 'Rp 1.150.000',
        time1: '± 3 Hari (6 jam)',
        time2: '± 4 Hari (8 jam)',
        time3: '± 5 Hari (10 jam)',
        description: 'Pendampingan privat level ahli untuk memperdalam skill tertentu atau menyelesaikan proyek profesional dengan tempo yang Anda tentukan sendiri.'
    },
    {
        id: 7,
        title: 'Bimbingan Privat (1-on-1)',
        img: MentorshipPrivat,
        category: 'Mentorship',
        tool: 'Bebas Pilih Materi',
        price1: 'Rp 2.000.000 (Sprint)',
        price2: 'Rp 3.800.000 (Marathon)',
        price3: 'Rp 5.500.000 (Semester)',
        time1: '1 Bulan (12x Pertemuan)',
        time2: '2 Bulan (24x Pertemuan)',
        time3: '3 Bulan (36x Pertemuan)',
        description: 'Layanan mentorship privat 1-on-1 untuk membantu penyelesaian tugas akademis atau proyek profesional dengan asistensi intensif via chat.'
    },
    {
        id: 8,
        title: 'Bimbingan Kelompok',
        img: MentorshipKelompok,
        category: 'Mentorship',
        tool: 'Bebas Pilih Materi',
        price1: 'Rp 4.000.000 (Sprint)',
        price2: 'Rp 7.300.000 (Marathon)',
        price3: 'Rp 10.000.000 (Semester)',
        time1: '1 Bulan / Maks 4 Anak',
        time2: '2 Bulan / Maks 4 Anak',
        time3: '3 Bulan / Maks 4 Anak',
        description: 'Bimbingan kolektif (2-4 orang) dengan durasi ± 20 jam per bulan. Bebas memilih project yang ingin dipelajari dan disepakati di awal kelas.'
    }
]