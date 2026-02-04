import { useState } from 'react'
import './App.css'

function Greeting() {
  return (
    <div className="greeting-section">
      <h1>Haloo!</h1>
      <h3>Selamat pagi</h3>
    </div>
  )
}

function Biodata(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Profil Siswa</h4>
      </div>
      <div className="card-body">
        <p><strong>Nama :</strong> {props.nama}</p>
        <p><strong>Kelas :</strong> {props.kelas}</p>
        <p><strong>NISN :</strong> {props.nisn}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [showForm, setShowForm] = useState();
  const [input, setInput] = useState({nama:"", nisn:"", kelas:""})
  console.log(input)
  const siswa = [
    { nama: "hanes", kelas: "XI PLG 1", nisn: "2396" },
    { nama: "icys", kelas: "XI PLG 2", nisn: "4346" },
    { nama: "vely", kelas: "XI PLG 1", nisn: "3496" },
    { nama: "lunga", kelas: "XI PLG 2", nisn: "2332" },

  ]
  const hewan = [
    { nama: "indek", jenis: 'herbifor' },
  ]

  return (
    <div className="container">
      <Greeting />


      <div classname="action-bar">
        <button className="btn btn-add" onClick={() => setShowForm(true)}>
          Tambah siswa
        </button>

      </div>

      <div className="card-grid">
        {
          siswa.map((nilai) => (
            <Biodata nama={nilai.nama} kelas={nilai.kelas} nisn={nilai.nisn} />
          ))
        }
      </div>
      {showForm && (
        <div className='modal-overlay'>

          <div classMame='modal'>

            <h2>Form Tambah</h2>
            <form action="">
              <input type="text" name='nama' placeholder='Nama'
              onChange={(a) => setInput({...input,nama:a.target.value})}/>
              <input type="text" name='nisn' placeholder='NISN'
              onChange={(a) => setInput({...input,nisn:a.target.value})}/>
              <select name="kelas" id="kelas"
              onChange={(a) => setInput({...input,kelas:a.target.value})}>
                <option value=""> -- pilih lah --</option>
                <option value="X PPLG 1">X PPLG 1</option>
                <option value="X PPLG 2">X PPLG 2</option>
                <option value="X PPLG 3">X PPLG 3</option>
                <option value="XI PPLG 1">XI PPLG 1</option>
                <option value="XI PPLG 2">XI PPLG 2</option>
                <option value="XI PPLG 3">XI PPLG 3</option>

              </select>
              <button className="Simpan" onClick={() => setShowForm(true)}>
              Simpan
            </button>
              <button className="Close" onClick={() => setShowForm(true)}>
              Close
            </button>
            </form>
            

          </div>
        </div>
        )}
    </div>
  )
}

