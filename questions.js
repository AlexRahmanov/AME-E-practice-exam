const questionBanks = {
  "SPE": [
    {
      "id": "SPEV001",
      "section": "DC Theory",
      "topic": "Electrical Calculations",
      "difficulty": "Calculation / visual interpretation",
      "question": "Using the circuit shown, what is the total current drawn from the 24 V source?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "options": [
        "2 A",
        "3 A",
        "6 A",
        "12 A"
      ],
      "answer": 0,
      "explanation": "Rtotal = 4 Ω + 8 Ω = 12 Ω. By Ohm’s law, I = 24 V / 12 Ω = 2 A.",
      "concept": "SPEV001"
    },
    {
      "id": "SPEV002",
      "section": "DC Theory",
      "topic": "Electrical Calculations",
      "difficulty": "Calculation / visual interpretation",
      "question": "Using the parallel network shown, what is the total source current?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "options": [
        "1 A",
        "2 A",
        "3 A",
        "4 A"
      ],
      "answer": 2,
      "explanation": "Branch currents are 28/14 = 2 A and 28/28 = 1 A. Total current is 3 A.",
      "concept": "SPEV002"
    },
    {
      "id": "SPEV003",
      "section": "DC Theory",
      "topic": "Voltage Divider",
      "difficulty": "Calculation / visual interpretation",
      "question": "In the voltage divider shown, what is VOUT measured across R2?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "options": [
        "4 V",
        "6 V",
        "8 V",
        "12 V"
      ],
      "answer": 2,
      "explanation": "VOUT = 12 × 4 kΩ/(2 kΩ + 4 kΩ) = 8 V.",
      "concept": "SPEV003"
    },
    {
      "id": "SPEV004",
      "section": "AC Theory",
      "topic": "RMS / Peak",
      "difficulty": "Calculation / visual interpretation",
      "question": "A sinusoidal source measures 115 V RMS. Approximately what is its peak voltage?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "options": [
        "81 V",
        "115 V",
        "163 V",
        "230 V"
      ],
      "answer": 2,
      "explanation": "For a sine wave, Vpeak ≈ Vrms × 1.414, so 115 V RMS is about 163 V peak.",
      "concept": "SPEV004"
    },
    {
      "id": "SPEV005",
      "section": "AC Theory",
      "topic": "Frequency / Period",
      "difficulty": "Calculation / visual interpretation",
      "question": "The waveform completes one cycle in 20 ms. What is its frequency?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "options": [
        "20 Hz",
        "50 Hz",
        "60 Hz",
        "200 Hz"
      ],
      "answer": 1,
      "explanation": "f = 1/T = 1/0.020 s = 50 Hz.",
      "concept": "SPEV005"
    },
    {
      "id": "SPEV006",
      "section": "AC Theory",
      "topic": "Phase",
      "difficulty": "Calculation / visual interpretation",
      "question": "Wave B reaches the corresponding point one-quarter cycle before Wave A. What is the phase relationship?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "options": [
        "B leads A by 90°",
        "B lags A by 90°",
        "B leads A by 180°",
        "The waves are in phase"
      ],
      "answer": 0,
      "explanation": "One-quarter of a cycle is 90°. The earlier waveform leads.",
      "concept": "SPEV006"
    },
    {
      "id": "SPEV007",
      "section": "Rectifiers",
      "topic": "Rectification",
      "difficulty": "Calculation / visual interpretation",
      "question": "Which description BEST matches the output shown on the right side of the figure?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Rectifier waveform</div>\n<svg viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Rectifier waveform\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"248\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">FULL-WAVE RECTIFIER OUTPUT</text><line x1=\"50\" y1=\"115\" x2=\"345\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"60,115.0 63,111.9 66,108.9 69,105.8 72,102.8 75,99.9 78,97.0 81,94.2 84,91.5 87,89.0 90,86.5 93,84.2 96,82.0 99,80.0 102,78.1 105,76.5 108,75.0 111,73.7 114,72.5 117,71.6 120,70.9 123,70.4 126,70.1 129,70.0 132,70.1 135,70.5 138,71.0 141,71.8 144,72.7 147,73.9 150,75.2 153,76.7 156,78.4 159,80.3 162,82.4 165,84.6 168,86.9 171,89.4 174,92.0 177,94.7 180,97.5 183,100.4 186,103.3 189,106.3 192,109.4 195,112.4 198,115.5 201,118.6 204,121.7 207,124.7 210,127.7 213,130.6 216,133.5 219,136.2 222,138.9 225,141.5 228,143.9 231,146.2 234,148.3 237,150.3 240,152.1 243,153.8 246,155.3 249,156.5 252,157.6 255,158.5 258,159.2 261,159.7 264,159.9 267,160.0 270,159.8 273,159.5 276,158.9 279,158.1 282,157.1 285,155.9 288,154.6 291,153.0 294,151.3 297,149.3 300,147.3 303,145.0 306,142.7 309,140.2 312,137.6 315,134.9 318,132.0 321,129.1 324,126.2 327,123.2 330,120.1 333,117.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"195\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC input</text><line x1=\"385\" y1=\"115\" x2=\"680\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"395,115.0 398,111.9 401,108.9 404,105.8 407,102.8 410,99.9 413,97.0 416,94.2 419,91.5 422,89.0 425,86.5 428,84.2 431,82.0 434,80.0 437,78.1 440,76.5 443,75.0 446,73.7 449,72.5 452,71.6 455,70.9 458,70.4 461,70.1 464,70.0 467,70.1 470,70.5 473,71.0 476,71.8 479,72.7 482,73.9 485,75.2 488,76.7 491,78.4 494,80.3 497,82.4 500,84.6 503,86.9 506,89.4 509,92.0 512,94.7 515,97.5 518,100.4 521,103.3 524,106.3 527,109.4 530,112.4 533,114.5 536,111.4 539,108.3 542,105.3 545,102.3 548,99.4 551,96.5 554,93.8 557,91.1 560,88.5 563,86.1 566,83.8 569,81.7 572,79.7 575,77.9 578,76.2 581,74.7 584,73.5 587,72.4 590,71.5 593,70.8 596,70.3 599,70.1 602,70.0 605,70.2 608,70.5 611,71.1 614,71.9 617,72.9 620,74.1 623,75.4 626,77.0 629,78.7 632,80.7 635,82.7 638,85.0 641,87.3 644,89.8 647,92.4 650,95.1 653,98.0 656,100.9 659,103.8 662,106.8 665,109.9 668,112.9\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"535\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Rectified output</text><text x=\"360\" y=\"220\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Both half-cycles produce load current in the same direction.</text></svg></div>",
      "options": [
        "Half-wave pulsating DC",
        "Full-wave pulsating DC",
        "Pure sinusoidal AC",
        "Steady DC with zero ripple"
      ],
      "answer": 1,
      "explanation": "Both input half-cycles appear as same-polarity output pulses, which is full-wave rectification.",
      "concept": "SPEV007"
    },
    {
      "id": "SPEV008",
      "section": "Reactance",
      "topic": "Capacitors",
      "difficulty": "Calculation / visual interpretation",
      "question": "After one RC time constant, a charging capacitor is approximately what percentage of final voltage?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RC charging graph</div>\n<svg viewBox=\"0 0 720 285\" role=\"img\" aria-label=\"RC charging graph\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"283\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">CAPACITOR CHARGING CURVE</text><line x1=\"70\" y1=\"235\" x2=\"660\" y2=\"235\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"245\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"80,235.0 84,229.3 88,223.8 92,218.5 96,213.4 100,208.4 104,203.7 108,199.1 112,194.6 116,190.3 120,186.2 124,182.2 128,178.3 132,174.6 136,171.0 140,167.5 144,164.1 148,160.9 152,157.7 156,154.7 160,151.8 164,149.0 168,146.2 172,143.6 176,141.1 180,138.6 184,136.3 188,134.0 192,131.8 196,129.6 200,127.6 204,125.6 208,123.7 212,121.8 216,120.0 220,118.3 224,116.7 228,115.0 232,113.5 236,112.0 240,110.5 244,109.1 248,107.8 252,106.5 256,105.2 260,104.0 264,102.8 268,101.7 272,100.6 276,99.6 280,98.5 284,97.6 288,96.6 292,95.7 296,94.8 300,94.0 304,93.1 308,92.3 312,91.6 316,90.8 320,90.1 324,89.4 328,88.7 332,88.1 336,87.5 340,86.9 344,86.3 348,85.7 352,85.2 356,84.7 360,84.2 364,83.7 368,83.2 372,82.7 376,82.3 380,81.9 384,81.5 388,81.1 392,80.7 396,80.3 400,80.0 404,79.6 408,79.3 412,79.0 416,78.7 420,78.4 424,78.1 428,77.8 432,77.5 436,77.3 440,77.0 444,76.8 448,76.5 452,76.3 456,76.1 460,75.9 464,75.7 468,75.5 472,75.3 476,75.1 480,74.9 484,74.8 488,74.6 492,74.4 496,74.3 500,74.1 504,74.0 508,73.9 512,73.7 516,73.6 520,73.5 524,73.4 528,73.2 532,73.1 536,73.0 540,72.9 544,72.8 548,72.7 552,72.6 556,72.5 560,72.4 564,72.4 568,72.3 572,72.2 576,72.1 580,72.1 584,72.0 588,71.9 592,71.8 596,71.8 600,71.7 604,71.7 608,71.6 612,71.6 616,71.5 620,71.4 624,71.4 628,71.3 632,71.3 636,71.3 640,71.2 644,71.2 648,71.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"194\" y1=\"70\" x2=\"194\" y2=\"235\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"194\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">1τ</text><text x=\"210\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">≈63.2% of final voltage at 1 time constant</text></svg></div>",
      "options": [
        "36.8%",
        "50%",
        "63.2%",
        "86.5%"
      ],
      "answer": 2,
      "explanation": "A charging capacitor reaches approximately 63.2% of its final voltage after one time constant.",
      "concept": "SPEV008"
    },
    {
      "id": "SPEV009",
      "section": "Boolean Logic",
      "topic": "Logic",
      "difficulty": "Calculation / visual interpretation",
      "question": "For the AND gate/truth table shown, what output results when A = 1 and B = 0?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "options": [
        "0",
        "1",
        "High impedance",
        "Indeterminate"
      ],
      "answer": 0,
      "explanation": "An AND output is 1 only when all inputs are 1.",
      "concept": "SPEV009"
    },
    {
      "id": "SPEV010",
      "section": "Number Systems",
      "topic": "Digital Fundamentals",
      "difficulty": "Calculation / visual interpretation",
      "question": "Using the reference chart, hexadecimal A corresponds to which decimal value?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "options": [
        "8",
        "9",
        "10",
        "12"
      ],
      "answer": 2,
      "explanation": "Hexadecimal A represents decimal 10.",
      "concept": "SPEV010"
    },
    {
      "id": "SPEV011",
      "section": "Transformer",
      "topic": "Transformer",
      "difficulty": "Calculation / visual interpretation",
      "question": "With 100 primary turns and 200 secondary turns, an ideal transformer supplied with 28 V AC has approximately what secondary voltage?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "options": [
        "14 V",
        "28 V",
        "56 V",
        "112 V"
      ],
      "answer": 2,
      "explanation": "The turns ratio is 2:1, so secondary voltage is approximately 56 V.",
      "concept": "SPEV011"
    },
    {
      "id": "SPEV012",
      "section": "Test Equipment",
      "topic": "Oscilloscope",
      "difficulty": "Calculation / visual interpretation",
      "question": "The displayed waveform spans approximately 4 horizontal divisions per cycle. With 2 ms/div, what is the approximate frequency?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "options": [
        "31.25 Hz",
        "62.5 Hz",
        "125 Hz",
        "250 Hz"
      ],
      "answer": 2,
      "explanation": "Period ≈ 4 × 2 ms = 8 ms; frequency = 1/0.008 ≈ 125 Hz.",
      "concept": "SPEV012"
    },
    {
      "id": "SPEV013",
      "section": "DC Theory",
      "topic": "Power",
      "difficulty": "Calculation / visual interpretation",
      "question": "A 28 V load draws 5 A. What electrical power is consumed?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "options": [
        "5.6 W",
        "33 W",
        "140 W",
        "784 W"
      ],
      "answer": 2,
      "explanation": "P = V × I = 28 × 5 = 140 W.",
      "concept": "SPEV013"
    },
    {
      "id": "SPEV014",
      "section": "DC Theory",
      "topic": "Resistance",
      "difficulty": "Calculation / visual interpretation",
      "question": "A 28 V circuit draws 2 A. What resistance does the load present?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "options": [
        "7 Ω",
        "14 Ω",
        "28 Ω",
        "56 Ω"
      ],
      "answer": 1,
      "explanation": "R = V/I = 28/2 = 14 Ω.",
      "concept": "SPEV014"
    },
    {
      "id": "SPEV015",
      "section": "Schematics",
      "topic": "Bridge Circuits",
      "difficulty": "Calculation / visual interpretation",
      "question": "In a balanced Wheatstone bridge, what is the detector current ideally?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Bridge circuit</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Bridge circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">WHEATSTONE BRIDGE</text><line x1=\"360\" y1=\"70\" x2=\"210\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"210\" y1=\"160\" x2=\"360\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"360\" y1=\"250\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"510\" y1=\"160\" x2=\"360\" y2=\"70\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"265\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1</text><text x=\"265\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2</text><text x=\"455\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R3</text><text x=\"455\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R4</text><line x1=\"210\" y1=\"160\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><circle cx=\"360\" cy=\"160\" r=\"24\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">G</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">At balance, bridge detector current is approximately zero.</text></svg></div>",
      "options": [
        "Maximum circuit current",
        "Approximately zero",
        "Equal to source current",
        "Twice the current through R1"
      ],
      "answer": 1,
      "explanation": "At balance the two detector nodes are at equal potential, so detector current is approximately zero.",
      "concept": "SPEV015"
    },
    {
      "id": "SPEV016",
      "section": "Diodes",
      "topic": "Semiconductors",
      "difficulty": "Calculation / visual interpretation",
      "question": "Which region of the diode curve represents normal forward conduction after the knee voltage?",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Semiconductor characteristic curve</div>\n<svg viewBox=\"0 0 720 290\" role=\"img\" aria-label=\"Semiconductor characteristic curve\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"288\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">DIODE CURRENT–VOLTAGE CHARACTERISTIC</text><line x1=\"80\" y1=\"220\" x2=\"650\" y2=\"220\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"300\" y1=\"45\" x2=\"300\" y2=\"270\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"648\" y=\"244\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Voltage</text><text x=\"270\" y=\"55\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Current</text><path d=\"M 315 217 C 390 215, 430 205, 460 170 C 495 125, 510 75, 520 55\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><path d=\"M 285 223 C 220 225, 150 226, 100 230\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"480\" y=\"190\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">forward region</text><text x=\"130\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">reverse leakage</text></svg></div>",
      "options": [
        "The steep positive-current region",
        "The flat reverse-leakage region",
        "The zero-current axis only",
        "The negative-voltage breakdown region in every normal application"
      ],
      "answer": 0,
      "explanation": "Normal forward conduction is represented by the rapidly increasing positive current after the forward knee.",
      "concept": "SPEV016"
    },
    {
      "id": "SPE017",
      "section": "1.12",
      "topic": "Bonding",
      "question": "What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit.",
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow."
      ],
      "answer": 0,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE018",
      "section": "1.12",
      "topic": "Bonding",
      "question": "During troubleshooting, which answer is MOST accurate? What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Provide a dedicated signal-return conductor for every avionics circuit.",
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control."
      ],
      "answer": 3,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE019",
      "section": "1.12",
      "topic": "Bonding",
      "question": "An AME E technician is evaluating the system. What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit."
      ],
      "answer": 2,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE020",
      "section": "1.12",
      "topic": "Bonding",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit.",
        "Increase the panel structural load capability."
      ],
      "answer": 1,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE021",
      "section": "1.12",
      "topic": "Shielding",
      "question": "A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Carry the normal load current in parallel with the signal conductor.",
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors."
      ],
      "answer": 3,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE022",
      "section": "1.12",
      "topic": "Shielding",
      "question": "During troubleshooting, which answer is MOST accurate? A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor."
      ],
      "answer": 2,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE023",
      "section": "1.12",
      "topic": "Shielding",
      "question": "An AME E technician is evaluating the system. A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor.",
        "Increase the DC resistance of the signal path."
      ],
      "answer": 1,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE024",
      "section": "1.12",
      "topic": "Shielding",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor.",
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks."
      ],
      "answer": 0,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE025",
      "section": "1.13",
      "topic": "Soldering",
      "question": "A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting."
      ],
      "answer": 2,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE026",
      "section": "1.13",
      "topic": "Soldering",
      "question": "During troubleshooting, which answer is MOST accurate? A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly."
      ],
      "answer": 1,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE027",
      "section": "1.13",
      "topic": "Soldering",
      "question": "An AME E technician is evaluating the system. A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief."
      ],
      "answer": 0,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE028",
      "section": "1.13",
      "topic": "Soldering",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint."
      ],
      "answer": 3,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE029",
      "section": "1.17",
      "topic": "Load Analysis",
      "question": "Why is an aircraft electrical load analysis performed?",
      "options": [
        "To prove that battery capacity alone can supply all flight loads indefinitely.",
        "To verify generation and distribution capacity can support required operating loads with appropriate margins.",
        "To determine only the maximum resistance of each branch circuit.",
        "To size circuit breakers without considering simultaneous loads."
      ],
      "answer": 1,
      "explanation": "Load analysis evaluates expected electrical demand against source/distribution capability under specified operating conditions.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE030",
      "section": "1.17",
      "topic": "Load Analysis",
      "question": "During troubleshooting, which answer is MOST accurate? Why is an aircraft electrical load analysis performed?",
      "options": [
        "To verify generation and distribution capacity can support required operating loads with appropriate margins.",
        "To determine only the maximum resistance of each branch circuit.",
        "To size circuit breakers without considering simultaneous loads.",
        "To prove that battery capacity alone can supply all flight loads indefinitely."
      ],
      "answer": 0,
      "explanation": "Load analysis evaluates expected electrical demand against source/distribution capability under specified operating conditions.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE031",
      "section": "1.17",
      "topic": "Load Analysis",
      "question": "An AME E technician is evaluating the system. Why is an aircraft electrical load analysis performed?",
      "options": [
        "To determine only the maximum resistance of each branch circuit.",
        "To size circuit breakers without considering simultaneous loads.",
        "To prove that battery capacity alone can supply all flight loads indefinitely.",
        "To verify generation and distribution capacity can support required operating loads with appropriate margins."
      ],
      "answer": 3,
      "explanation": "Load analysis evaluates expected electrical demand against source/distribution capability under specified operating conditions.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE032",
      "section": "1.17",
      "topic": "Load Analysis",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is an aircraft electrical load analysis performed?",
      "options": [
        "To size circuit breakers without considering simultaneous loads.",
        "To prove that battery capacity alone can supply all flight loads indefinitely.",
        "To verify generation and distribution capacity can support required operating loads with appropriate margins.",
        "To determine only the maximum resistance of each branch circuit."
      ],
      "answer": 2,
      "explanation": "Load analysis evaluates expected electrical demand against source/distribution capability under specified operating conditions.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE033",
      "section": "1.16",
      "topic": "Graphs and Charts",
      "question": "A troubleshooting graph shows output voltage rising linearly with sensor input until it flattens at the supply rail. What does the flat region most likely indicate?",
      "options": [
        "The circuit has reached saturation or its output limit.",
        "The sensor has become perfectly linear.",
        "The circuit gain has increased sharply.",
        "The input signal frequency has fallen to zero."
      ],
      "answer": 0,
      "explanation": "A flat output despite increasing input commonly indicates saturation or clipping at a circuit limit.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE034",
      "section": "1.16",
      "topic": "Graphs and Charts",
      "question": "During troubleshooting, which answer is MOST accurate? A troubleshooting graph shows output voltage rising linearly with sensor input until it flattens at the supply rail. What does the flat region most likely indicate?",
      "options": [
        "The sensor has become perfectly linear.",
        "The circuit gain has increased sharply.",
        "The input signal frequency has fallen to zero.",
        "The circuit has reached saturation or its output limit."
      ],
      "answer": 3,
      "explanation": "A flat output despite increasing input commonly indicates saturation or clipping at a circuit limit.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "concept": "SPE-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE035",
      "section": "1.16",
      "topic": "Graphs and Charts",
      "question": "An AME E technician is evaluating the system. A troubleshooting graph shows output voltage rising linearly with sensor input until it flattens at the supply rail. What does the flat region most likely indicate?",
      "options": [
        "The circuit gain has increased sharply.",
        "The input signal frequency has fallen to zero.",
        "The circuit has reached saturation or its output limit.",
        "The sensor has become perfectly linear."
      ],
      "answer": 2,
      "explanation": "A flat output despite increasing input commonly indicates saturation or clipping at a circuit limit.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE036",
      "section": "1.16",
      "topic": "Graphs and Charts",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A troubleshooting graph shows output voltage rising linearly with sensor input until it flattens at the supply rail. What does the flat region most likely indicate?",
      "options": [
        "The input signal frequency has fallen to zero.",
        "The circuit has reached saturation or its output limit.",
        "The sensor has become perfectly linear.",
        "The circuit gain has increased sharply."
      ],
      "answer": 1,
      "explanation": "A flat output despite increasing input commonly indicates saturation or clipping at a circuit limit.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RC charging graph</div>\n<svg viewBox=\"0 0 720 285\" role=\"img\" aria-label=\"RC charging graph\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"283\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">CAPACITOR CHARGING CURVE</text><line x1=\"70\" y1=\"235\" x2=\"660\" y2=\"235\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"245\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"80,235.0 84,229.3 88,223.8 92,218.5 96,213.4 100,208.4 104,203.7 108,199.1 112,194.6 116,190.3 120,186.2 124,182.2 128,178.3 132,174.6 136,171.0 140,167.5 144,164.1 148,160.9 152,157.7 156,154.7 160,151.8 164,149.0 168,146.2 172,143.6 176,141.1 180,138.6 184,136.3 188,134.0 192,131.8 196,129.6 200,127.6 204,125.6 208,123.7 212,121.8 216,120.0 220,118.3 224,116.7 228,115.0 232,113.5 236,112.0 240,110.5 244,109.1 248,107.8 252,106.5 256,105.2 260,104.0 264,102.8 268,101.7 272,100.6 276,99.6 280,98.5 284,97.6 288,96.6 292,95.7 296,94.8 300,94.0 304,93.1 308,92.3 312,91.6 316,90.8 320,90.1 324,89.4 328,88.7 332,88.1 336,87.5 340,86.9 344,86.3 348,85.7 352,85.2 356,84.7 360,84.2 364,83.7 368,83.2 372,82.7 376,82.3 380,81.9 384,81.5 388,81.1 392,80.7 396,80.3 400,80.0 404,79.6 408,79.3 412,79.0 416,78.7 420,78.4 424,78.1 428,77.8 432,77.5 436,77.3 440,77.0 444,76.8 448,76.5 452,76.3 456,76.1 460,75.9 464,75.7 468,75.5 472,75.3 476,75.1 480,74.9 484,74.8 488,74.6 492,74.4 496,74.3 500,74.1 504,74.0 508,73.9 512,73.7 516,73.6 520,73.5 524,73.4 528,73.2 532,73.1 536,73.0 540,72.9 544,72.8 548,72.7 552,72.6 556,72.5 560,72.4 564,72.4 568,72.3 572,72.2 576,72.1 580,72.1 584,72.0 588,71.9 592,71.8 596,71.8 600,71.7 604,71.7 608,71.6 612,71.6 616,71.5 620,71.4 624,71.4 628,71.3 632,71.3 636,71.3 640,71.2 644,71.2 648,71.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"194\" y1=\"70\" x2=\"194\" y2=\"235\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"194\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">1τ</text><text x=\"210\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">≈63.2% of final voltage at 1 time constant</text></svg></div>",
      "concept": "SPE-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE037",
      "section": "2.1",
      "topic": "Aerodynamics",
      "question": "Why might an E-category technician need basic fixed-wing aerodynamic knowledge?",
      "options": [
        "Because E privileges automatically include structural repair approval on all aircraft.",
        "Only to calculate engine compression ratios.",
        "Because navigation systems are independent of aircraft motion and attitude.",
        "Avionics sensors and control systems often interpret or command parameters such as airspeed, angle, altitude and flight-control response."
      ],
      "answer": 3,
      "explanation": "Understanding flight parameters supports diagnosis of instruments, autopilot, warning and navigation systems.",
      "visual": null,
      "concept": "SPE-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE038",
      "section": "2.1",
      "topic": "Aerodynamics",
      "question": "During troubleshooting, which answer is MOST accurate? Why might an E-category technician need basic fixed-wing aerodynamic knowledge?",
      "options": [
        "Only to calculate engine compression ratios.",
        "Because navigation systems are independent of aircraft motion and attitude.",
        "Avionics sensors and control systems often interpret or command parameters such as airspeed, angle, altitude and flight-control response.",
        "Because E privileges automatically include structural repair approval on all aircraft."
      ],
      "answer": 2,
      "explanation": "Understanding flight parameters supports diagnosis of instruments, autopilot, warning and navigation systems.",
      "visual": null,
      "concept": "SPE-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE039",
      "section": "2.1",
      "topic": "Aerodynamics",
      "question": "An AME E technician is evaluating the system. Why might an E-category technician need basic fixed-wing aerodynamic knowledge?",
      "options": [
        "Because navigation systems are independent of aircraft motion and attitude.",
        "Avionics sensors and control systems often interpret or command parameters such as airspeed, angle, altitude and flight-control response.",
        "Because E privileges automatically include structural repair approval on all aircraft.",
        "Only to calculate engine compression ratios."
      ],
      "answer": 1,
      "explanation": "Understanding flight parameters supports diagnosis of instruments, autopilot, warning and navigation systems.",
      "visual": null,
      "concept": "SPE-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE040",
      "section": "2.1",
      "topic": "Aerodynamics",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why might an E-category technician need basic fixed-wing aerodynamic knowledge?",
      "options": [
        "Avionics sensors and control systems often interpret or command parameters such as airspeed, angle, altitude and flight-control response.",
        "Because E privileges automatically include structural repair approval on all aircraft.",
        "Only to calculate engine compression ratios.",
        "Because navigation systems are independent of aircraft motion and attitude."
      ],
      "answer": 0,
      "explanation": "Understanding flight parameters supports diagnosis of instruments, autopilot, warning and navigation systems.",
      "visual": null,
      "concept": "SPE-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE041",
      "section": "3.2",
      "topic": "Electrical Hardware",
      "question": "A connector contact shows correct continuity but excessive voltage drop under load. What is the most likely concern?",
      "options": [
        "Correct contact condition, because continuity is the only required test.",
        "Excessive shielding effectiveness.",
        "High contact resistance that is not revealed by a simple continuity check.",
        "An open circuit, because any voltage drop proves zero current flow."
      ],
      "answer": 2,
      "explanation": "A low-current continuity test can pass through a resistive connection that produces unacceptable voltage drop and heating under operating load.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE042",
      "section": "3.2",
      "topic": "Electrical Hardware",
      "question": "During troubleshooting, which answer is MOST accurate? A connector contact shows correct continuity but excessive voltage drop under load. What is the most likely concern?",
      "options": [
        "Excessive shielding effectiveness.",
        "High contact resistance that is not revealed by a simple continuity check.",
        "An open circuit, because any voltage drop proves zero current flow.",
        "Correct contact condition, because continuity is the only required test."
      ],
      "answer": 1,
      "explanation": "A low-current continuity test can pass through a resistive connection that produces unacceptable voltage drop and heating under operating load.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE043",
      "section": "3.2",
      "topic": "Electrical Hardware",
      "question": "An AME E technician is evaluating the system. A connector contact shows correct continuity but excessive voltage drop under load. What is the most likely concern?",
      "options": [
        "High contact resistance that is not revealed by a simple continuity check.",
        "An open circuit, because any voltage drop proves zero current flow.",
        "Correct contact condition, because continuity is the only required test.",
        "Excessive shielding effectiveness."
      ],
      "answer": 0,
      "explanation": "A low-current continuity test can pass through a resistive connection that produces unacceptable voltage drop and heating under operating load.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Bridge circuit</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Bridge circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">WHEATSTONE BRIDGE</text><line x1=\"360\" y1=\"70\" x2=\"210\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"210\" y1=\"160\" x2=\"360\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"360\" y1=\"250\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"510\" y1=\"160\" x2=\"360\" y2=\"70\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"265\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1</text><text x=\"265\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2</text><text x=\"455\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R3</text><text x=\"455\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R4</text><line x1=\"210\" y1=\"160\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><circle cx=\"360\" cy=\"160\" r=\"24\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">G</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">At balance, bridge detector current is approximately zero.</text></svg></div>",
      "concept": "SPE-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE044",
      "section": "3.2",
      "topic": "Electrical Hardware",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A connector contact shows correct continuity but excessive voltage drop under load. What is the most likely concern?",
      "options": [
        "An open circuit, because any voltage drop proves zero current flow.",
        "Correct contact condition, because continuity is the only required test.",
        "Excessive shielding effectiveness.",
        "High contact resistance that is not revealed by a simple continuity check."
      ],
      "answer": 3,
      "explanation": "A low-current continuity test can pass through a resistive connection that produces unacceptable voltage drop and heating under operating load.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE045",
      "section": "3.3",
      "topic": "Wire Size",
      "question": "What is the primary reason wire gauge must account for both current and run length?",
      "options": [
        "Run length matters only for shielded signal cables, not power wiring.",
        "To limit conductor heating and voltage drop within acceptable values.",
        "Longer wires always require smaller conductors to reduce capacitance.",
        "Current affects insulation colour but not conductor size."
      ],
      "answer": 1,
      "explanation": "Conductor resistance causes voltage drop and I²R heating; both increase with length and current.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE046",
      "section": "3.3",
      "topic": "Wire Size",
      "question": "During troubleshooting, which answer is MOST accurate? What is the primary reason wire gauge must account for both current and run length?",
      "options": [
        "To limit conductor heating and voltage drop within acceptable values.",
        "Longer wires always require smaller conductors to reduce capacitance.",
        "Current affects insulation colour but not conductor size.",
        "Run length matters only for shielded signal cables, not power wiring."
      ],
      "answer": 0,
      "explanation": "Conductor resistance causes voltage drop and I²R heating; both increase with length and current.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE047",
      "section": "3.3",
      "topic": "Wire Size",
      "question": "An AME E technician is evaluating the system. What is the primary reason wire gauge must account for both current and run length?",
      "options": [
        "Longer wires always require smaller conductors to reduce capacitance.",
        "Current affects insulation colour but not conductor size.",
        "Run length matters only for shielded signal cables, not power wiring.",
        "To limit conductor heating and voltage drop within acceptable values."
      ],
      "answer": 3,
      "explanation": "Conductor resistance causes voltage drop and I²R heating; both increase with length and current.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE048",
      "section": "3.3",
      "topic": "Wire Size",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the primary reason wire gauge must account for both current and run length?",
      "options": [
        "Current affects insulation colour but not conductor size.",
        "Run length matters only for shielded signal cables, not power wiring.",
        "To limit conductor heating and voltage drop within acceptable values.",
        "Longer wires always require smaller conductors to reduce capacitance."
      ],
      "answer": 2,
      "explanation": "Conductor resistance causes voltage drop and I²R heating; both increase with length and current.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE049",
      "section": "4.2",
      "topic": "Schematics",
      "question": "On an aircraft wiring diagram, a relay contact is shown in its de-energized state unless otherwise identified. Why is this convention important?",
      "options": [
        "It provides a consistent reference for tracing circuit logic without assuming the relay is powered.",
        "It shows the contact position at maximum aircraft electrical load.",
        "It proves the relay coil is open circuit.",
        "It indicates the contact position only during engine start."
      ],
      "answer": 0,
      "explanation": "Schematics normally depict components in a defined reference state so circuit paths can be interpreted consistently.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE050",
      "section": "4.2",
      "topic": "Schematics",
      "question": "During troubleshooting, which answer is MOST accurate? On an aircraft wiring diagram, a relay contact is shown in its de-energized state unless otherwise identified. Why is this convention important?",
      "options": [
        "It shows the contact position at maximum aircraft electrical load.",
        "It proves the relay coil is open circuit.",
        "It indicates the contact position only during engine start.",
        "It provides a consistent reference for tracing circuit logic without assuming the relay is powered."
      ],
      "answer": 3,
      "explanation": "Schematics normally depict components in a defined reference state so circuit paths can be interpreted consistently.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE051",
      "section": "4.2",
      "topic": "Schematics",
      "question": "An AME E technician is evaluating the system. On an aircraft wiring diagram, a relay contact is shown in its de-energized state unless otherwise identified. Why is this convention important?",
      "options": [
        "It proves the relay coil is open circuit.",
        "It indicates the contact position only during engine start.",
        "It provides a consistent reference for tracing circuit logic without assuming the relay is powered.",
        "It shows the contact position at maximum aircraft electrical load."
      ],
      "answer": 2,
      "explanation": "Schematics normally depict components in a defined reference state so circuit paths can be interpreted consistently.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE052",
      "section": "4.2",
      "topic": "Schematics",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. On an aircraft wiring diagram, a relay contact is shown in its de-energized state unless otherwise identified. Why is this convention important?",
      "options": [
        "It indicates the contact position only during engine start.",
        "It provides a consistent reference for tracing circuit logic without assuming the relay is powered.",
        "It shows the contact position at maximum aircraft electrical load.",
        "It proves the relay coil is open circuit."
      ],
      "answer": 1,
      "explanation": "Schematics normally depict components in a defined reference state so circuit paths can be interpreted consistently.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Bridge circuit</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Bridge circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">WHEATSTONE BRIDGE</text><line x1=\"360\" y1=\"70\" x2=\"210\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"210\" y1=\"160\" x2=\"360\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"360\" y1=\"250\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"510\" y1=\"160\" x2=\"360\" y2=\"70\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"265\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1</text><text x=\"265\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2</text><text x=\"455\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R3</text><text x=\"455\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R4</text><line x1=\"210\" y1=\"160\" x2=\"510\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><circle cx=\"360\" cy=\"160\" r=\"24\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">G</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">At balance, bridge detector current is approximately zero.</text></svg></div>",
      "concept": "SPE-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE053",
      "section": "5.1",
      "topic": "Weight and Balance",
      "question": "An avionics unit is replaced by a heavier unit at the same arm. What changes?",
      "options": [
        "Only the centre of gravity changes; total aircraft weight is unchanged.",
        "Moment is unchanged because the installation station did not change.",
        "The CG must move forward regardless of the unit location.",
        "Aircraft weight increases and the moment increases by the added weight multiplied by that arm."
      ],
      "answer": 3,
      "explanation": "Any weight change changes total weight and moment; CG direction depends on the installation arm relative to the existing CG.",
      "visual": null,
      "concept": "SPE-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE054",
      "section": "5.1",
      "topic": "Weight and Balance",
      "question": "During troubleshooting, which answer is MOST accurate? An avionics unit is replaced by a heavier unit at the same arm. What changes?",
      "options": [
        "Moment is unchanged because the installation station did not change.",
        "The CG must move forward regardless of the unit location.",
        "Aircraft weight increases and the moment increases by the added weight multiplied by that arm.",
        "Only the centre of gravity changes; total aircraft weight is unchanged."
      ],
      "answer": 2,
      "explanation": "Any weight change changes total weight and moment; CG direction depends on the installation arm relative to the existing CG.",
      "visual": null,
      "concept": "SPE-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE055",
      "section": "5.1",
      "topic": "Weight and Balance",
      "question": "An AME E technician is evaluating the system. An avionics unit is replaced by a heavier unit at the same arm. What changes?",
      "options": [
        "The CG must move forward regardless of the unit location.",
        "Aircraft weight increases and the moment increases by the added weight multiplied by that arm.",
        "Only the centre of gravity changes; total aircraft weight is unchanged.",
        "Moment is unchanged because the installation station did not change."
      ],
      "answer": 1,
      "explanation": "Any weight change changes total weight and moment; CG direction depends on the installation arm relative to the existing CG.",
      "visual": null,
      "concept": "SPE-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE056",
      "section": "5.1",
      "topic": "Weight and Balance",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An avionics unit is replaced by a heavier unit at the same arm. What changes?",
      "options": [
        "Aircraft weight increases and the moment increases by the added weight multiplied by that arm.",
        "Only the centre of gravity changes; total aircraft weight is unchanged.",
        "Moment is unchanged because the installation station did not change.",
        "The CG must move forward regardless of the unit location."
      ],
      "answer": 0,
      "explanation": "Any weight change changes total weight and moment; CG direction depends on the installation arm relative to the existing CG.",
      "visual": null,
      "concept": "SPE-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE057",
      "section": "6.2",
      "topic": "Pitot-Static",
      "question": "After pitot-static maintenance, why must leaks be checked to specified limits?",
      "options": [
        "Leak checks are required only for the pitot line, not static lines.",
        "Pressure leaks affect only the mechanical altimeter and not electronic ADC inputs.",
        "Leaks can introduce pressure errors that affect connected instruments and air-data systems.",
        "A small leak improves instrument response by preventing pressure trapping."
      ],
      "answer": 2,
      "explanation": "Pitot/static accuracy depends on maintaining representative pressure to all connected sensing devices.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "SPE-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE058",
      "section": "6.2",
      "topic": "Pitot-Static",
      "question": "During troubleshooting, which answer is MOST accurate? After pitot-static maintenance, why must leaks be checked to specified limits?",
      "options": [
        "Pressure leaks affect only the mechanical altimeter and not electronic ADC inputs.",
        "Leaks can introduce pressure errors that affect connected instruments and air-data systems.",
        "A small leak improves instrument response by preventing pressure trapping.",
        "Leak checks are required only for the pitot line, not static lines."
      ],
      "answer": 1,
      "explanation": "Pitot/static accuracy depends on maintaining representative pressure to all connected sensing devices.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "SPE-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE059",
      "section": "6.2",
      "topic": "Pitot-Static",
      "question": "An AME E technician is evaluating the system. After pitot-static maintenance, why must leaks be checked to specified limits?",
      "options": [
        "Leaks can introduce pressure errors that affect connected instruments and air-data systems.",
        "A small leak improves instrument response by preventing pressure trapping.",
        "Leak checks are required only for the pitot line, not static lines.",
        "Pressure leaks affect only the mechanical altimeter and not electronic ADC inputs."
      ],
      "answer": 0,
      "explanation": "Pitot/static accuracy depends on maintaining representative pressure to all connected sensing devices.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "SPE-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE060",
      "section": "6.2",
      "topic": "Pitot-Static",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. After pitot-static maintenance, why must leaks be checked to specified limits?",
      "options": [
        "A small leak improves instrument response by preventing pressure trapping.",
        "Leak checks are required only for the pitot line, not static lines.",
        "Pressure leaks affect only the mechanical altimeter and not electronic ADC inputs.",
        "Leaks can introduce pressure errors that affect connected instruments and air-data systems."
      ],
      "answer": 3,
      "explanation": "Pitot/static accuracy depends on maintaining representative pressure to all connected sensing devices.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "SPE-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE061",
      "section": "7.1",
      "topic": "Corrosion",
      "question": "Greenish deposits are found on copper conductors at a connector. What is the best interpretation?",
      "options": [
        "The deposit is evidence of correct tinning.",
        "Corrosion products indicate moisture/chemical attack and the termination requires evaluation and corrective action.",
        "The green colour confirms the conductor has a low-resistance protective coating.",
        "Copper corrosion is cosmetic if continuity is present."
      ],
      "answer": 1,
      "explanation": "Corrosion can increase resistance and degrade mechanical/electrical integrity even before a circuit becomes open.",
      "visual": null,
      "concept": "SPE-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE062",
      "section": "7.1",
      "topic": "Corrosion",
      "question": "During troubleshooting, which answer is MOST accurate? Greenish deposits are found on copper conductors at a connector. What is the best interpretation?",
      "options": [
        "Corrosion products indicate moisture/chemical attack and the termination requires evaluation and corrective action.",
        "The green colour confirms the conductor has a low-resistance protective coating.",
        "Copper corrosion is cosmetic if continuity is present.",
        "The deposit is evidence of correct tinning."
      ],
      "answer": 0,
      "explanation": "Corrosion can increase resistance and degrade mechanical/electrical integrity even before a circuit becomes open.",
      "visual": null,
      "concept": "SPE-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE063",
      "section": "7.1",
      "topic": "Corrosion",
      "question": "An AME E technician is evaluating the system. Greenish deposits are found on copper conductors at a connector. What is the best interpretation?",
      "options": [
        "The green colour confirms the conductor has a low-resistance protective coating.",
        "Copper corrosion is cosmetic if continuity is present.",
        "The deposit is evidence of correct tinning.",
        "Corrosion products indicate moisture/chemical attack and the termination requires evaluation and corrective action."
      ],
      "answer": 3,
      "explanation": "Corrosion can increase resistance and degrade mechanical/electrical integrity even before a circuit becomes open.",
      "visual": null,
      "concept": "SPE-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE064",
      "section": "7.1",
      "topic": "Corrosion",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Greenish deposits are found on copper conductors at a connector. What is the best interpretation?",
      "options": [
        "Copper corrosion is cosmetic if continuity is present.",
        "The deposit is evidence of correct tinning.",
        "Corrosion products indicate moisture/chemical attack and the termination requires evaluation and corrective action.",
        "The green colour confirms the conductor has a low-resistance protective coating."
      ],
      "answer": 2,
      "explanation": "Corrosion can increase resistance and degrade mechanical/electrical integrity even before a circuit becomes open.",
      "visual": null,
      "concept": "SPE-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE065",
      "section": "9.1",
      "topic": "Flight Controls",
      "question": "An autopilot servo cable installation is disturbed during maintenance. What must be verified before release?",
      "options": [
        "Correct rigging, freedom of movement, travel and absence of interference in accordance with approved data.",
        "Only electrical continuity of the servo motor.",
        "Servo clutch torque alone, because mechanical travel is controlled by software.",
        "That the flight control rests at neutral with the aircraft unpowered; full travel is unnecessary."
      ],
      "answer": 0,
      "explanation": "Autoflight interfaces with primary controls, so mechanical rigging and operational checks are essential.",
      "visual": null,
      "concept": "SPE-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE066",
      "section": "9.1",
      "topic": "Flight Controls",
      "question": "During troubleshooting, which answer is MOST accurate? An autopilot servo cable installation is disturbed during maintenance. What must be verified before release?",
      "options": [
        "Only electrical continuity of the servo motor.",
        "Servo clutch torque alone, because mechanical travel is controlled by software.",
        "That the flight control rests at neutral with the aircraft unpowered; full travel is unnecessary.",
        "Correct rigging, freedom of movement, travel and absence of interference in accordance with approved data."
      ],
      "answer": 3,
      "explanation": "Autoflight interfaces with primary controls, so mechanical rigging and operational checks are essential.",
      "visual": null,
      "concept": "SPE-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE067",
      "section": "9.1",
      "topic": "Flight Controls",
      "question": "An AME E technician is evaluating the system. An autopilot servo cable installation is disturbed during maintenance. What must be verified before release?",
      "options": [
        "Servo clutch torque alone, because mechanical travel is controlled by software.",
        "That the flight control rests at neutral with the aircraft unpowered; full travel is unnecessary.",
        "Correct rigging, freedom of movement, travel and absence of interference in accordance with approved data.",
        "Only electrical continuity of the servo motor."
      ],
      "answer": 2,
      "explanation": "Autoflight interfaces with primary controls, so mechanical rigging and operational checks are essential.",
      "visual": null,
      "concept": "SPE-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE068",
      "section": "9.1",
      "topic": "Flight Controls",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An autopilot servo cable installation is disturbed during maintenance. What must be verified before release?",
      "options": [
        "That the flight control rests at neutral with the aircraft unpowered; full travel is unnecessary.",
        "Correct rigging, freedom of movement, travel and absence of interference in accordance with approved data.",
        "Only electrical continuity of the servo motor.",
        "Servo clutch torque alone, because mechanical travel is controlled by software."
      ],
      "answer": 1,
      "explanation": "Autoflight interfaces with primary controls, so mechanical rigging and operational checks are essential.",
      "visual": null,
      "concept": "SPE-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE069",
      "section": "10.1",
      "topic": "NDT",
      "question": "Which statement best distinguishes eddy-current inspection from dye penetrant?",
      "options": [
        "Dye penetrant is preferred for deep internal flaws that do not reach the surface.",
        "Eddy current can only be used on ferromagnetic steels.",
        "Both methods require the part to be electrically energized by the aircraft.",
        "Eddy current can detect certain surface/near-surface discontinuities in conductive material without requiring penetrant entry into an open crack."
      ],
      "answer": 3,
      "explanation": "Eddy-current inspection uses induced currents in conductive material; penetrant requires a surface-breaking discontinuity.",
      "visual": null,
      "concept": "SPE-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE070",
      "section": "10.1",
      "topic": "NDT",
      "question": "During troubleshooting, which answer is MOST accurate? Which statement best distinguishes eddy-current inspection from dye penetrant?",
      "options": [
        "Eddy current can only be used on ferromagnetic steels.",
        "Both methods require the part to be electrically energized by the aircraft.",
        "Eddy current can detect certain surface/near-surface discontinuities in conductive material without requiring penetrant entry into an open crack.",
        "Dye penetrant is preferred for deep internal flaws that do not reach the surface."
      ],
      "answer": 2,
      "explanation": "Eddy-current inspection uses induced currents in conductive material; penetrant requires a surface-breaking discontinuity.",
      "visual": null,
      "concept": "SPE-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE071",
      "section": "10.1",
      "topic": "NDT",
      "question": "An AME E technician is evaluating the system. Which statement best distinguishes eddy-current inspection from dye penetrant?",
      "options": [
        "Both methods require the part to be electrically energized by the aircraft.",
        "Eddy current can detect certain surface/near-surface discontinuities in conductive material without requiring penetrant entry into an open crack.",
        "Dye penetrant is preferred for deep internal flaws that do not reach the surface.",
        "Eddy current can only be used on ferromagnetic steels."
      ],
      "answer": 1,
      "explanation": "Eddy-current inspection uses induced currents in conductive material; penetrant requires a surface-breaking discontinuity.",
      "visual": null,
      "concept": "SPE-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE072",
      "section": "10.1",
      "topic": "NDT",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Which statement best distinguishes eddy-current inspection from dye penetrant?",
      "options": [
        "Eddy current can detect certain surface/near-surface discontinuities in conductive material without requiring penetrant entry into an open crack.",
        "Dye penetrant is preferred for deep internal flaws that do not reach the surface.",
        "Eddy current can only be used on ferromagnetic steels.",
        "Both methods require the part to be electrically energized by the aircraft."
      ],
      "answer": 0,
      "explanation": "Eddy-current inspection uses induced currents in conductive material; penetrant requires a surface-breaking discontinuity.",
      "visual": null,
      "concept": "SPE-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE073",
      "section": "11.3",
      "topic": "Flight Line Safety",
      "question": "Before transmitting high-power weather radar on the ground, what must be considered?",
      "options": [
        "Radar may be transmitted freely because microwave energy is non-ionizing.",
        "Only the possibility of interference with the aircraft VHF radio.",
        "The applicable personnel, fuel-vapour and equipment hazard areas specified by maintenance/safety data.",
        "Only the aircraft battery state of charge."
      ],
      "answer": 2,
      "explanation": "Radar RF energy can create exposure and ignition/equipment hazards; specified safe zones and procedures must be observed.",
      "visual": null,
      "concept": "SPE-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE074",
      "section": "11.3",
      "topic": "Flight Line Safety",
      "question": "During troubleshooting, which answer is MOST accurate? Before transmitting high-power weather radar on the ground, what must be considered?",
      "options": [
        "Only the possibility of interference with the aircraft VHF radio.",
        "The applicable personnel, fuel-vapour and equipment hazard areas specified by maintenance/safety data.",
        "Only the aircraft battery state of charge.",
        "Radar may be transmitted freely because microwave energy is non-ionizing."
      ],
      "answer": 1,
      "explanation": "Radar RF energy can create exposure and ignition/equipment hazards; specified safe zones and procedures must be observed.",
      "visual": null,
      "concept": "SPE-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE075",
      "section": "11.3",
      "topic": "Flight Line Safety",
      "question": "An AME E technician is evaluating the system. Before transmitting high-power weather radar on the ground, what must be considered?",
      "options": [
        "The applicable personnel, fuel-vapour and equipment hazard areas specified by maintenance/safety data.",
        "Only the aircraft battery state of charge.",
        "Radar may be transmitted freely because microwave energy is non-ionizing.",
        "Only the possibility of interference with the aircraft VHF radio."
      ],
      "answer": 0,
      "explanation": "Radar RF energy can create exposure and ignition/equipment hazards; specified safe zones and procedures must be observed.",
      "visual": null,
      "concept": "SPE-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE076",
      "section": "11.3",
      "topic": "Flight Line Safety",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Before transmitting high-power weather radar on the ground, what must be considered?",
      "options": [
        "Only the aircraft battery state of charge.",
        "Radar may be transmitted freely because microwave energy is non-ionizing.",
        "Only the possibility of interference with the aircraft VHF radio.",
        "The applicable personnel, fuel-vapour and equipment hazard areas specified by maintenance/safety data."
      ],
      "answer": 3,
      "explanation": "Radar RF energy can create exposure and ignition/equipment hazards; specified safe zones and procedures must be observed.",
      "visual": null,
      "concept": "SPE-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE077",
      "section": "12.4",
      "topic": "Test Equipment",
      "question": "Why should an oscilloscope probe ground lead be connected carefully on aircraft electronics?",
      "options": [
        "A scope ground may be connected to any conductor if the vertical scale is high enough.",
        "An inappropriate ground point can short a circuit or create a hazardous ground path.",
        "Probe grounds are always electrically isolated from the oscilloscope chassis.",
        "The ground lead changes only waveform colour, not circuit operation."
      ],
      "answer": 1,
      "explanation": "Bench/test equipment grounding can unintentionally connect circuit nodes to chassis/earth, so reference points matter.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE078",
      "section": "12.4",
      "topic": "Test Equipment",
      "question": "During troubleshooting, which answer is MOST accurate? Why should an oscilloscope probe ground lead be connected carefully on aircraft electronics?",
      "options": [
        "An inappropriate ground point can short a circuit or create a hazardous ground path.",
        "Probe grounds are always electrically isolated from the oscilloscope chassis.",
        "The ground lead changes only waveform colour, not circuit operation.",
        "A scope ground may be connected to any conductor if the vertical scale is high enough."
      ],
      "answer": 0,
      "explanation": "Bench/test equipment grounding can unintentionally connect circuit nodes to chassis/earth, so reference points matter.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE079",
      "section": "12.4",
      "topic": "Test Equipment",
      "question": "An AME E technician is evaluating the system. Why should an oscilloscope probe ground lead be connected carefully on aircraft electronics?",
      "options": [
        "Probe grounds are always electrically isolated from the oscilloscope chassis.",
        "The ground lead changes only waveform colour, not circuit operation.",
        "A scope ground may be connected to any conductor if the vertical scale is high enough.",
        "An inappropriate ground point can short a circuit or create a hazardous ground path."
      ],
      "answer": 3,
      "explanation": "Bench/test equipment grounding can unintentionally connect circuit nodes to chassis/earth, so reference points matter.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE080",
      "section": "12.4",
      "topic": "Test Equipment",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why should an oscilloscope probe ground lead be connected carefully on aircraft electronics?",
      "options": [
        "The ground lead changes only waveform colour, not circuit operation.",
        "A scope ground may be connected to any conductor if the vertical scale is high enough.",
        "An inappropriate ground point can short a circuit or create a hazardous ground path.",
        "Probe grounds are always electrically isolated from the oscilloscope chassis."
      ],
      "answer": 2,
      "explanation": "Bench/test equipment grounding can unintentionally connect circuit nodes to chassis/earth, so reference points matter.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE081",
      "section": "14.2",
      "topic": "Turbine Engines",
      "question": "An avionics technician is troubleshooting an engine indication discrepancy. Why is knowledge of turbine-engine operation relevant?",
      "options": [
        "Indicated parameters must be interpreted in the context of actual engine operating relationships and limits.",
        "E-category maintenance does not interface with engine sensors or indicating systems.",
        "Only mechanical technicians may read engine parameters.",
        "Engine indication systems are independent of the physical engine process."
      ],
      "answer": 0,
      "explanation": "Correct troubleshooting distinguishes sensor/display faults from legitimate engine-condition changes.",
      "visual": null,
      "concept": "SPE-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE082",
      "section": "14.2",
      "topic": "Turbine Engines",
      "question": "During troubleshooting, which answer is MOST accurate? An avionics technician is troubleshooting an engine indication discrepancy. Why is knowledge of turbine-engine operation relevant?",
      "options": [
        "E-category maintenance does not interface with engine sensors or indicating systems.",
        "Only mechanical technicians may read engine parameters.",
        "Engine indication systems are independent of the physical engine process.",
        "Indicated parameters must be interpreted in the context of actual engine operating relationships and limits."
      ],
      "answer": 3,
      "explanation": "Correct troubleshooting distinguishes sensor/display faults from legitimate engine-condition changes.",
      "visual": null,
      "concept": "SPE-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE083",
      "section": "14.2",
      "topic": "Turbine Engines",
      "question": "An AME E technician is evaluating the system. An avionics technician is troubleshooting an engine indication discrepancy. Why is knowledge of turbine-engine operation relevant?",
      "options": [
        "Only mechanical technicians may read engine parameters.",
        "Engine indication systems are independent of the physical engine process.",
        "Indicated parameters must be interpreted in the context of actual engine operating relationships and limits.",
        "E-category maintenance does not interface with engine sensors or indicating systems."
      ],
      "answer": 2,
      "explanation": "Correct troubleshooting distinguishes sensor/display faults from legitimate engine-condition changes.",
      "visual": null,
      "concept": "SPE-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE084",
      "section": "14.2",
      "topic": "Turbine Engines",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An avionics technician is troubleshooting an engine indication discrepancy. Why is knowledge of turbine-engine operation relevant?",
      "options": [
        "Engine indication systems are independent of the physical engine process.",
        "Indicated parameters must be interpreted in the context of actual engine operating relationships and limits.",
        "E-category maintenance does not interface with engine sensors or indicating systems.",
        "Only mechanical technicians may read engine parameters."
      ],
      "answer": 1,
      "explanation": "Correct troubleshooting distinguishes sensor/display faults from legitimate engine-condition changes.",
      "visual": null,
      "concept": "SPE-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE085",
      "section": "15.1",
      "topic": "Fuel Systems",
      "question": "A capacitance-type fuel quantity system indicates quantity by sensing what electrical property?",
      "options": [
        "Change in wire resistance caused only by tank pressure.",
        "Induced frequency from the fuel boost pump.",
        "Magnetic field strength of the fuel mass.",
        "Change in capacitance caused by the dielectric difference between fuel and air."
      ],
      "answer": 3,
      "explanation": "Capacitance probes use the different dielectric constants of fuel and air to infer fuel level/quantity.",
      "visual": null,
      "concept": "SPE-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE086",
      "section": "15.1",
      "topic": "Fuel Systems",
      "question": "During troubleshooting, which answer is MOST accurate? A capacitance-type fuel quantity system indicates quantity by sensing what electrical property?",
      "options": [
        "Induced frequency from the fuel boost pump.",
        "Magnetic field strength of the fuel mass.",
        "Change in capacitance caused by the dielectric difference between fuel and air.",
        "Change in wire resistance caused only by tank pressure."
      ],
      "answer": 2,
      "explanation": "Capacitance probes use the different dielectric constants of fuel and air to infer fuel level/quantity.",
      "visual": null,
      "concept": "SPE-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE087",
      "section": "15.1",
      "topic": "Fuel Systems",
      "question": "An AME E technician is evaluating the system. A capacitance-type fuel quantity system indicates quantity by sensing what electrical property?",
      "options": [
        "Magnetic field strength of the fuel mass.",
        "Change in capacitance caused by the dielectric difference between fuel and air.",
        "Change in wire resistance caused only by tank pressure.",
        "Induced frequency from the fuel boost pump."
      ],
      "answer": 1,
      "explanation": "Capacitance probes use the different dielectric constants of fuel and air to infer fuel level/quantity.",
      "visual": null,
      "concept": "SPE-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE088",
      "section": "15.1",
      "topic": "Fuel Systems",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A capacitance-type fuel quantity system indicates quantity by sensing what electrical property?",
      "options": [
        "Change in capacitance caused by the dielectric difference between fuel and air.",
        "Change in wire resistance caused only by tank pressure.",
        "Induced frequency from the fuel boost pump.",
        "Magnetic field strength of the fuel mass."
      ],
      "answer": 0,
      "explanation": "Capacitance probes use the different dielectric constants of fuel and air to infer fuel level/quantity.",
      "visual": null,
      "concept": "SPE-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE089",
      "section": "16.1",
      "topic": "Hydraulic/Pneumatic",
      "question": "A pressure transducer output is normal at zero pressure but low across the rest of its range. What should be checked before replacing it?",
      "options": [
        "Increase system relief-valve pressure until the indication matches.",
        "Check only the cockpit display because transducers cannot drift.",
        "Supply/reference voltage, wiring/ground integrity and actual pressure against approved test data.",
        "Replace the transducer immediately because any low reading proves sensor failure."
      ],
      "answer": 2,
      "explanation": "A systematic check separates sensor, wiring, supply, indication and actual-system causes.",
      "visual": null,
      "concept": "SPE-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE090",
      "section": "16.1",
      "topic": "Hydraulic/Pneumatic",
      "question": "During troubleshooting, which answer is MOST accurate? A pressure transducer output is normal at zero pressure but low across the rest of its range. What should be checked before replacing it?",
      "options": [
        "Check only the cockpit display because transducers cannot drift.",
        "Supply/reference voltage, wiring/ground integrity and actual pressure against approved test data.",
        "Replace the transducer immediately because any low reading proves sensor failure.",
        "Increase system relief-valve pressure until the indication matches."
      ],
      "answer": 1,
      "explanation": "A systematic check separates sensor, wiring, supply, indication and actual-system causes.",
      "visual": null,
      "concept": "SPE-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE091",
      "section": "16.1",
      "topic": "Hydraulic/Pneumatic",
      "question": "An AME E technician is evaluating the system. A pressure transducer output is normal at zero pressure but low across the rest of its range. What should be checked before replacing it?",
      "options": [
        "Supply/reference voltage, wiring/ground integrity and actual pressure against approved test data.",
        "Replace the transducer immediately because any low reading proves sensor failure.",
        "Increase system relief-valve pressure until the indication matches.",
        "Check only the cockpit display because transducers cannot drift."
      ],
      "answer": 0,
      "explanation": "A systematic check separates sensor, wiring, supply, indication and actual-system causes.",
      "visual": null,
      "concept": "SPE-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE092",
      "section": "16.1",
      "topic": "Hydraulic/Pneumatic",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A pressure transducer output is normal at zero pressure but low across the rest of its range. What should be checked before replacing it?",
      "options": [
        "Replace the transducer immediately because any low reading proves sensor failure.",
        "Increase system relief-valve pressure until the indication matches.",
        "Check only the cockpit display because transducers cannot drift.",
        "Supply/reference voltage, wiring/ground integrity and actual pressure against approved test data."
      ],
      "answer": 3,
      "explanation": "A systematic check separates sensor, wiring, supply, indication and actual-system causes.",
      "visual": null,
      "concept": "SPE-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE093",
      "section": "17.1",
      "topic": "Fire Protection",
      "question": "A continuous-loop fire detector tests correctly electrically but is found sharply kinked. What is the best action?",
      "options": [
        "Replace the fire-extinguisher bottle instead.",
        "Evaluate the sensing element against installation/damage limits because mechanical damage can affect reliability.",
        "Accept it because a successful electrical test proves the loop is airworthy.",
        "Straighten it by hand regardless of manufacturer limits."
      ],
      "answer": 1,
      "explanation": "Mechanical condition and routing are part of detector serviceability; an electrical test alone may not reveal all damage.",
      "visual": null,
      "concept": "SPE-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE094",
      "section": "17.1",
      "topic": "Fire Protection",
      "question": "During troubleshooting, which answer is MOST accurate? A continuous-loop fire detector tests correctly electrically but is found sharply kinked. What is the best action?",
      "options": [
        "Evaluate the sensing element against installation/damage limits because mechanical damage can affect reliability.",
        "Accept it because a successful electrical test proves the loop is airworthy.",
        "Straighten it by hand regardless of manufacturer limits.",
        "Replace the fire-extinguisher bottle instead."
      ],
      "answer": 0,
      "explanation": "Mechanical condition and routing are part of detector serviceability; an electrical test alone may not reveal all damage.",
      "visual": null,
      "concept": "SPE-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE095",
      "section": "17.1",
      "topic": "Fire Protection",
      "question": "An AME E technician is evaluating the system. A continuous-loop fire detector tests correctly electrically but is found sharply kinked. What is the best action?",
      "options": [
        "Accept it because a successful electrical test proves the loop is airworthy.",
        "Straighten it by hand regardless of manufacturer limits.",
        "Replace the fire-extinguisher bottle instead.",
        "Evaluate the sensing element against installation/damage limits because mechanical damage can affect reliability."
      ],
      "answer": 3,
      "explanation": "Mechanical condition and routing are part of detector serviceability; an electrical test alone may not reveal all damage.",
      "visual": null,
      "concept": "SPE-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE096",
      "section": "17.1",
      "topic": "Fire Protection",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A continuous-loop fire detector tests correctly electrically but is found sharply kinked. What is the best action?",
      "options": [
        "Straighten it by hand regardless of manufacturer limits.",
        "Replace the fire-extinguisher bottle instead.",
        "Evaluate the sensing element against installation/damage limits because mechanical damage can affect reliability.",
        "Accept it because a successful electrical test proves the loop is airworthy."
      ],
      "answer": 2,
      "explanation": "Mechanical condition and routing are part of detector serviceability; an electrical test alone may not reveal all damage.",
      "visual": null,
      "concept": "SPE-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE097",
      "section": "19.1",
      "topic": "Pressurization",
      "question": "A cabin pressure controller receives correct electrical inputs but cabin altitude remains high. What is the best next approach?",
      "options": [
        "Verify commanded versus actual outflow-valve operation and pneumatic/pressure-system conditions.",
        "Increase electrical bus voltage to the controller.",
        "Replace the cabin altitude indicator first because high cabin altitude cannot be real.",
        "Disable the safety relief valves to allow more pressure buildup."
      ],
      "answer": 0,
      "explanation": "Troubleshooting should verify whether the controller command is being translated into actual outflow-valve/system response.",
      "visual": null,
      "concept": "SPE-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE098",
      "section": "19.1",
      "topic": "Pressurization",
      "question": "During troubleshooting, which answer is MOST accurate? A cabin pressure controller receives correct electrical inputs but cabin altitude remains high. What is the best next approach?",
      "options": [
        "Increase electrical bus voltage to the controller.",
        "Replace the cabin altitude indicator first because high cabin altitude cannot be real.",
        "Disable the safety relief valves to allow more pressure buildup.",
        "Verify commanded versus actual outflow-valve operation and pneumatic/pressure-system conditions."
      ],
      "answer": 3,
      "explanation": "Troubleshooting should verify whether the controller command is being translated into actual outflow-valve/system response.",
      "visual": null,
      "concept": "SPE-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE099",
      "section": "19.1",
      "topic": "Pressurization",
      "question": "An AME E technician is evaluating the system. A cabin pressure controller receives correct electrical inputs but cabin altitude remains high. What is the best next approach?",
      "options": [
        "Replace the cabin altitude indicator first because high cabin altitude cannot be real.",
        "Disable the safety relief valves to allow more pressure buildup.",
        "Verify commanded versus actual outflow-valve operation and pneumatic/pressure-system conditions.",
        "Increase electrical bus voltage to the controller."
      ],
      "answer": 2,
      "explanation": "Troubleshooting should verify whether the controller command is being translated into actual outflow-valve/system response.",
      "visual": null,
      "concept": "SPE-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE100",
      "section": "19.1",
      "topic": "Pressurization",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A cabin pressure controller receives correct electrical inputs but cabin altitude remains high. What is the best next approach?",
      "options": [
        "Disable the safety relief valves to allow more pressure buildup.",
        "Verify commanded versus actual outflow-valve operation and pneumatic/pressure-system conditions.",
        "Increase electrical bus voltage to the controller.",
        "Replace the cabin altitude indicator first because high cabin altitude cannot be real."
      ],
      "answer": 1,
      "explanation": "Troubleshooting should verify whether the controller command is being translated into actual outflow-valve/system response.",
      "visual": null,
      "concept": "SPE-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE101",
      "section": "20.3",
      "topic": "Landing Gear Indication",
      "question": "A gear-down lamp is extinguished but mechanical downlock is confirmed. What is the most appropriate first diagnostic direction?",
      "options": [
        "Assume the gear is unsafe because an extinguished lamp always proves the downlock is not engaged.",
        "Adjust the downlock until the lamp illuminates without checking switch rigging.",
        "Replace the cockpit lamp and release the aircraft without functional testing.",
        "Check the indication circuit/sensor adjustment and wiring using approved data before disturbing the mechanical lock."
      ],
      "answer": 3,
      "explanation": "Indication must agree with actual gear position; isolate the sensor, wiring, lamp and adjustment rather than altering a confirmed mechanical condition.",
      "visual": null,
      "concept": "SPE-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE102",
      "section": "20.3",
      "topic": "Landing Gear Indication",
      "question": "During troubleshooting, which answer is MOST accurate? A gear-down lamp is extinguished but mechanical downlock is confirmed. What is the most appropriate first diagnostic direction?",
      "options": [
        "Adjust the downlock until the lamp illuminates without checking switch rigging.",
        "Replace the cockpit lamp and release the aircraft without functional testing.",
        "Check the indication circuit/sensor adjustment and wiring using approved data before disturbing the mechanical lock.",
        "Assume the gear is unsafe because an extinguished lamp always proves the downlock is not engaged."
      ],
      "answer": 2,
      "explanation": "Indication must agree with actual gear position; isolate the sensor, wiring, lamp and adjustment rather than altering a confirmed mechanical condition.",
      "visual": null,
      "concept": "SPE-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE103",
      "section": "20.3",
      "topic": "Landing Gear Indication",
      "question": "An AME E technician is evaluating the system. A gear-down lamp is extinguished but mechanical downlock is confirmed. What is the most appropriate first diagnostic direction?",
      "options": [
        "Replace the cockpit lamp and release the aircraft without functional testing.",
        "Check the indication circuit/sensor adjustment and wiring using approved data before disturbing the mechanical lock.",
        "Assume the gear is unsafe because an extinguished lamp always proves the downlock is not engaged.",
        "Adjust the downlock until the lamp illuminates without checking switch rigging."
      ],
      "answer": 1,
      "explanation": "Indication must agree with actual gear position; isolate the sensor, wiring, lamp and adjustment rather than altering a confirmed mechanical condition.",
      "visual": null,
      "concept": "SPE-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE104",
      "section": "20.3",
      "topic": "Landing Gear Indication",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A gear-down lamp is extinguished but mechanical downlock is confirmed. What is the most appropriate first diagnostic direction?",
      "options": [
        "Check the indication circuit/sensor adjustment and wiring using approved data before disturbing the mechanical lock.",
        "Assume the gear is unsafe because an extinguished lamp always proves the downlock is not engaged.",
        "Adjust the downlock until the lamp illuminates without checking switch rigging.",
        "Replace the cockpit lamp and release the aircraft without functional testing."
      ],
      "answer": 0,
      "explanation": "Indication must agree with actual gear position; isolate the sensor, wiring, lamp and adjustment rather than altering a confirmed mechanical condition.",
      "visual": null,
      "concept": "SPE-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE105",
      "section": "21.3",
      "topic": "Starter-Generator",
      "question": "In starter mode, a starter-generator primarily does what?",
      "options": [
        "Acts only as an AC inverter during engine start.",
        "Controls ignition timing mechanically.",
        "Uses electrical power to produce torque for engine rotation; after start it can be reconfigured to generate electrical power.",
        "Generates electrical power throughout cranking without consuming bus current."
      ],
      "answer": 2,
      "explanation": "A starter-generator is a reversible electromechanical machine used as a motor for starting and a generator after engine acceleration.",
      "visual": null,
      "concept": "SPE-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE106",
      "section": "21.3",
      "topic": "Starter-Generator",
      "question": "During troubleshooting, which answer is MOST accurate? In starter mode, a starter-generator primarily does what?",
      "options": [
        "Controls ignition timing mechanically.",
        "Uses electrical power to produce torque for engine rotation; after start it can be reconfigured to generate electrical power.",
        "Generates electrical power throughout cranking without consuming bus current.",
        "Acts only as an AC inverter during engine start."
      ],
      "answer": 1,
      "explanation": "A starter-generator is a reversible electromechanical machine used as a motor for starting and a generator after engine acceleration.",
      "visual": null,
      "concept": "SPE-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE107",
      "section": "21.3",
      "topic": "Starter-Generator",
      "question": "An AME E technician is evaluating the system. In starter mode, a starter-generator primarily does what?",
      "options": [
        "Uses electrical power to produce torque for engine rotation; after start it can be reconfigured to generate electrical power.",
        "Generates electrical power throughout cranking without consuming bus current.",
        "Acts only as an AC inverter during engine start.",
        "Controls ignition timing mechanically."
      ],
      "answer": 0,
      "explanation": "A starter-generator is a reversible electromechanical machine used as a motor for starting and a generator after engine acceleration.",
      "visual": null,
      "concept": "SPE-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE108",
      "section": "21.3",
      "topic": "Starter-Generator",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. In starter mode, a starter-generator primarily does what?",
      "options": [
        "Generates electrical power throughout cranking without consuming bus current.",
        "Acts only as an AC inverter during engine start.",
        "Controls ignition timing mechanically.",
        "Uses electrical power to produce torque for engine rotation; after start it can be reconfigured to generate electrical power."
      ],
      "answer": 3,
      "explanation": "A starter-generator is a reversible electromechanical machine used as a motor for starting and a generator after engine acceleration.",
      "visual": null,
      "concept": "SPE-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE109",
      "section": "22.1",
      "topic": "Ice Detection",
      "question": "An ice detector heater is used primarily for what reason?",
      "options": [
        "To heat pitot-static plumbing throughout the aircraft.",
        "To de-ice/reset the sensing element as required by the detector design.",
        "To provide wing anti-ice air.",
        "To increase detector capacitance so it permanently indicates ice."
      ],
      "answer": 1,
      "explanation": "Many detectors use a heated cycle to remove accumulated ice from the sensor and restore detection capability.",
      "visual": null,
      "concept": "SPE-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE110",
      "section": "22.1",
      "topic": "Ice Detection",
      "question": "During troubleshooting, which answer is MOST accurate? An ice detector heater is used primarily for what reason?",
      "options": [
        "To de-ice/reset the sensing element as required by the detector design.",
        "To provide wing anti-ice air.",
        "To increase detector capacitance so it permanently indicates ice.",
        "To heat pitot-static plumbing throughout the aircraft."
      ],
      "answer": 0,
      "explanation": "Many detectors use a heated cycle to remove accumulated ice from the sensor and restore detection capability.",
      "visual": null,
      "concept": "SPE-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE111",
      "section": "22.1",
      "topic": "Ice Detection",
      "question": "An AME E technician is evaluating the system. An ice detector heater is used primarily for what reason?",
      "options": [
        "To provide wing anti-ice air.",
        "To increase detector capacitance so it permanently indicates ice.",
        "To heat pitot-static plumbing throughout the aircraft.",
        "To de-ice/reset the sensing element as required by the detector design."
      ],
      "answer": 3,
      "explanation": "Many detectors use a heated cycle to remove accumulated ice from the sensor and restore detection capability.",
      "visual": null,
      "concept": "SPE-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE112",
      "section": "22.1",
      "topic": "Ice Detection",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An ice detector heater is used primarily for what reason?",
      "options": [
        "To increase detector capacitance so it permanently indicates ice.",
        "To heat pitot-static plumbing throughout the aircraft.",
        "To de-ice/reset the sensing element as required by the detector design.",
        "To provide wing anti-ice air."
      ],
      "answer": 2,
      "explanation": "Many detectors use a heated cycle to remove accumulated ice from the sensor and restore detection capability.",
      "visual": null,
      "concept": "SPE-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE113",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "A 28 V source is connected to 4 Ω and 10 Ω resistors in series. What is the circuit current?",
      "options": [
        "2 A.",
        "7 A.",
        "1.4 A.",
        "14 A."
      ],
      "answer": 0,
      "explanation": "Series resistance is 14 Ω; I = V/R = 28/14 = 2 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE114",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "During troubleshooting, which answer is MOST accurate? A 28 V source is connected to 4 Ω and 10 Ω resistors in series. What is the circuit current?",
      "options": [
        "7 A.",
        "1.4 A.",
        "14 A.",
        "2 A."
      ],
      "answer": 3,
      "explanation": "Series resistance is 14 Ω; I = V/R = 28/14 = 2 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE115",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "An AME E technician is evaluating the system. A 28 V source is connected to 4 Ω and 10 Ω resistors in series. What is the circuit current?",
      "options": [
        "1.4 A.",
        "14 A.",
        "2 A.",
        "7 A."
      ],
      "answer": 2,
      "explanation": "Series resistance is 14 Ω; I = V/R = 28/14 = 2 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE116",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A 28 V source is connected to 4 Ω and 10 Ω resistors in series. What is the circuit current?",
      "options": [
        "14 A.",
        "2 A.",
        "7 A.",
        "1.4 A."
      ],
      "answer": 1,
      "explanation": "Series resistance is 14 Ω; I = V/R = 28/14 = 2 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE117",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "In the voltage divider shown, approximately what voltage is measured at Vout with no load connected?",
      "options": [
        "8 V.",
        "12 V.",
        "24 V.",
        "16 V."
      ],
      "answer": 3,
      "explanation": "With 2 kΩ above and 4 kΩ below, Vout = 24 × 4/(2+4) = 16 V.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE118",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "During troubleshooting, which answer is MOST accurate? In the voltage divider shown, approximately what voltage is measured at Vout with no load connected?",
      "options": [
        "12 V.",
        "24 V.",
        "16 V.",
        "8 V."
      ],
      "answer": 2,
      "explanation": "With 2 kΩ above and 4 kΩ below, Vout = 24 × 4/(2+4) = 16 V.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE119",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "An AME E technician is evaluating the system. In the voltage divider shown, approximately what voltage is measured at Vout with no load connected?",
      "options": [
        "24 V.",
        "16 V.",
        "8 V.",
        "12 V."
      ],
      "answer": 1,
      "explanation": "With 2 kΩ above and 4 kΩ below, Vout = 24 × 4/(2+4) = 16 V.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE120",
      "section": "23.5",
      "topic": "DC Theory",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. In the voltage divider shown, approximately what voltage is measured at Vout with no load connected?",
      "options": [
        "16 V.",
        "8 V.",
        "12 V.",
        "24 V."
      ],
      "answer": 0,
      "explanation": "With 2 kΩ above and 4 kΩ below, Vout = 24 × 4/(2+4) = 16 V.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE121",
      "section": "23.6",
      "topic": "AC Theory",
      "question": "For a sinusoidal AC waveform, RMS voltage is most useful because it represents what?",
      "options": [
        "The average value of a full sine wave over one complete cycle without rectification.",
        "The frequency multiplied by peak voltage.",
        "The DC-equivalent heating effect in a resistive load.",
        "The peak-to-peak voltage divided by two in every waveform."
      ],
      "answer": 2,
      "explanation": "RMS provides the equivalent power/heating relationship for resistive loads.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE122",
      "section": "23.6",
      "topic": "AC Theory",
      "question": "During troubleshooting, which answer is MOST accurate? For a sinusoidal AC waveform, RMS voltage is most useful because it represents what?",
      "options": [
        "The frequency multiplied by peak voltage.",
        "The DC-equivalent heating effect in a resistive load.",
        "The peak-to-peak voltage divided by two in every waveform.",
        "The average value of a full sine wave over one complete cycle without rectification."
      ],
      "answer": 1,
      "explanation": "RMS provides the equivalent power/heating relationship for resistive loads.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "concept": "SPE-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE123",
      "section": "23.6",
      "topic": "AC Theory",
      "question": "An AME E technician is evaluating the system. For a sinusoidal AC waveform, RMS voltage is most useful because it represents what?",
      "options": [
        "The DC-equivalent heating effect in a resistive load.",
        "The peak-to-peak voltage divided by two in every waveform.",
        "The average value of a full sine wave over one complete cycle without rectification.",
        "The frequency multiplied by peak voltage."
      ],
      "answer": 0,
      "explanation": "RMS provides the equivalent power/heating relationship for resistive loads.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE124",
      "section": "23.6",
      "topic": "AC Theory",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. For a sinusoidal AC waveform, RMS voltage is most useful because it represents what?",
      "options": [
        "The peak-to-peak voltage divided by two in every waveform.",
        "The average value of a full sine wave over one complete cycle without rectification.",
        "The frequency multiplied by peak voltage.",
        "The DC-equivalent heating effect in a resistive load."
      ],
      "answer": 3,
      "explanation": "RMS provides the equivalent power/heating relationship for resistive loads.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "concept": "SPE-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE125",
      "section": "23.9",
      "topic": "Digital ICs",
      "question": "For the AND gate shown with A = 1 and B = 0, what is output Q?",
      "options": [
        "It is undefined because the inputs differ.",
        "0.",
        "1.",
        "It alternates between 0 and 1."
      ],
      "answer": 1,
      "explanation": "An AND gate is high only when all required inputs are high.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE126",
      "section": "23.9",
      "topic": "Digital ICs",
      "question": "During troubleshooting, which answer is MOST accurate? For the AND gate shown with A = 1 and B = 0, what is output Q?",
      "options": [
        "0.",
        "1.",
        "It alternates between 0 and 1.",
        "It is undefined because the inputs differ."
      ],
      "answer": 0,
      "explanation": "An AND gate is high only when all required inputs are high.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE127",
      "section": "23.9",
      "topic": "Digital ICs",
      "question": "An AME E technician is evaluating the system. For the AND gate shown with A = 1 and B = 0, what is output Q?",
      "options": [
        "1.",
        "It alternates between 0 and 1.",
        "It is undefined because the inputs differ.",
        "0."
      ],
      "answer": 3,
      "explanation": "An AND gate is high only when all required inputs are high.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE128",
      "section": "23.9",
      "topic": "Digital ICs",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. For the AND gate shown with A = 1 and B = 0, what is output Q?",
      "options": [
        "It alternates between 0 and 1.",
        "It is undefined because the inputs differ.",
        "0.",
        "1."
      ],
      "answer": 2,
      "explanation": "An AND gate is high only when all required inputs are high.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE129",
      "section": "23.18",
      "topic": "Boolean Logic",
      "question": "For the NAND gate shown with A = 1 and B = 1, what is output Q?",
      "options": [
        "0.",
        "1.",
        "High impedance.",
        "Undefined until a clock pulse arrives."
      ],
      "answer": 0,
      "explanation": "NAND is the inverted result of AND. AND(1,1)=1, so NAND output is 0.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE130",
      "section": "23.18",
      "topic": "Boolean Logic",
      "question": "During troubleshooting, which answer is MOST accurate? For the NAND gate shown with A = 1 and B = 1, what is output Q?",
      "options": [
        "1.",
        "High impedance.",
        "Undefined until a clock pulse arrives.",
        "0."
      ],
      "answer": 3,
      "explanation": "NAND is the inverted result of AND. AND(1,1)=1, so NAND output is 0.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE131",
      "section": "23.18",
      "topic": "Boolean Logic",
      "question": "An AME E technician is evaluating the system. For the NAND gate shown with A = 1 and B = 1, what is output Q?",
      "options": [
        "High impedance.",
        "Undefined until a clock pulse arrives.",
        "0.",
        "1."
      ],
      "answer": 2,
      "explanation": "NAND is the inverted result of AND. AND(1,1)=1, so NAND output is 0.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE132",
      "section": "23.18",
      "topic": "Boolean Logic",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. For the NAND gate shown with A = 1 and B = 1, what is output Q?",
      "options": [
        "Undefined until a clock pulse arrives.",
        "0.",
        "1.",
        "High impedance."
      ],
      "answer": 1,
      "explanation": "NAND is the inverted result of AND. AND(1,1)=1, so NAND output is 0.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE133",
      "section": "23.10",
      "topic": "Solid-State Devices",
      "question": "In the NPN transistor symbol shown, conventional collector current can flow strongly when what condition is established in normal active/switching use?",
      "options": [
        "The collector-base junction alone is forward biased while the base-emitter junction is reverse biased.",
        "The emitter is left open circuit.",
        "The base is always at exactly the same potential as the emitter.",
        "The base-emitter junction is forward biased sufficiently relative to the emitter."
      ],
      "answer": 3,
      "explanation": "For a silicon NPN device, sufficient base-emitter forward bias enables transistor conduction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Semiconductor characteristic curve</div>\n<svg viewBox=\"0 0 720 290\" role=\"img\" aria-label=\"Semiconductor characteristic curve\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"288\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">DIODE CURRENT–VOLTAGE CHARACTERISTIC</text><line x1=\"80\" y1=\"220\" x2=\"650\" y2=\"220\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"300\" y1=\"45\" x2=\"300\" y2=\"270\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"648\" y=\"244\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Voltage</text><text x=\"270\" y=\"55\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Current</text><path d=\"M 315 217 C 390 215, 430 205, 460 170 C 495 125, 510 75, 520 55\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><path d=\"M 285 223 C 220 225, 150 226, 100 230\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"480\" y=\"190\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">forward region</text><text x=\"130\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">reverse leakage</text></svg></div>",
      "concept": "SPE-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE134",
      "section": "23.10",
      "topic": "Solid-State Devices",
      "question": "During troubleshooting, which answer is MOST accurate? In the NPN transistor symbol shown, conventional collector current can flow strongly when what condition is established in normal active/switching use?",
      "options": [
        "The emitter is left open circuit.",
        "The base is always at exactly the same potential as the emitter.",
        "The base-emitter junction is forward biased sufficiently relative to the emitter.",
        "The collector-base junction alone is forward biased while the base-emitter junction is reverse biased."
      ],
      "answer": 2,
      "explanation": "For a silicon NPN device, sufficient base-emitter forward bias enables transistor conduction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE135",
      "section": "23.10",
      "topic": "Solid-State Devices",
      "question": "An AME E technician is evaluating the system. In the NPN transistor symbol shown, conventional collector current can flow strongly when what condition is established in normal active/switching use?",
      "options": [
        "The base is always at exactly the same potential as the emitter.",
        "The base-emitter junction is forward biased sufficiently relative to the emitter.",
        "The collector-base junction alone is forward biased while the base-emitter junction is reverse biased.",
        "The emitter is left open circuit."
      ],
      "answer": 1,
      "explanation": "For a silicon NPN device, sufficient base-emitter forward bias enables transistor conduction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Rectifier waveform</div>\n<svg viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Rectifier waveform\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"248\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">FULL-WAVE RECTIFIER OUTPUT</text><line x1=\"50\" y1=\"115\" x2=\"345\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"60,115.0 63,111.9 66,108.9 69,105.8 72,102.8 75,99.9 78,97.0 81,94.2 84,91.5 87,89.0 90,86.5 93,84.2 96,82.0 99,80.0 102,78.1 105,76.5 108,75.0 111,73.7 114,72.5 117,71.6 120,70.9 123,70.4 126,70.1 129,70.0 132,70.1 135,70.5 138,71.0 141,71.8 144,72.7 147,73.9 150,75.2 153,76.7 156,78.4 159,80.3 162,82.4 165,84.6 168,86.9 171,89.4 174,92.0 177,94.7 180,97.5 183,100.4 186,103.3 189,106.3 192,109.4 195,112.4 198,115.5 201,118.6 204,121.7 207,124.7 210,127.7 213,130.6 216,133.5 219,136.2 222,138.9 225,141.5 228,143.9 231,146.2 234,148.3 237,150.3 240,152.1 243,153.8 246,155.3 249,156.5 252,157.6 255,158.5 258,159.2 261,159.7 264,159.9 267,160.0 270,159.8 273,159.5 276,158.9 279,158.1 282,157.1 285,155.9 288,154.6 291,153.0 294,151.3 297,149.3 300,147.3 303,145.0 306,142.7 309,140.2 312,137.6 315,134.9 318,132.0 321,129.1 324,126.2 327,123.2 330,120.1 333,117.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"195\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC input</text><line x1=\"385\" y1=\"115\" x2=\"680\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"395,115.0 398,111.9 401,108.9 404,105.8 407,102.8 410,99.9 413,97.0 416,94.2 419,91.5 422,89.0 425,86.5 428,84.2 431,82.0 434,80.0 437,78.1 440,76.5 443,75.0 446,73.7 449,72.5 452,71.6 455,70.9 458,70.4 461,70.1 464,70.0 467,70.1 470,70.5 473,71.0 476,71.8 479,72.7 482,73.9 485,75.2 488,76.7 491,78.4 494,80.3 497,82.4 500,84.6 503,86.9 506,89.4 509,92.0 512,94.7 515,97.5 518,100.4 521,103.3 524,106.3 527,109.4 530,112.4 533,114.5 536,111.4 539,108.3 542,105.3 545,102.3 548,99.4 551,96.5 554,93.8 557,91.1 560,88.5 563,86.1 566,83.8 569,81.7 572,79.7 575,77.9 578,76.2 581,74.7 584,73.5 587,72.4 590,71.5 593,70.8 596,70.3 599,70.1 602,70.0 605,70.2 608,70.5 611,71.1 614,71.9 617,72.9 620,74.1 623,75.4 626,77.0 629,78.7 632,80.7 635,82.7 638,85.0 641,87.3 644,89.8 647,92.4 650,95.1 653,98.0 656,100.9 659,103.8 662,106.8 665,109.9 668,112.9\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"535\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Rectified output</text><text x=\"360\" y=\"220\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Both half-cycles produce load current in the same direction.</text></svg></div>",
      "concept": "SPE-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE136",
      "section": "23.10",
      "topic": "Solid-State Devices",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. In the NPN transistor symbol shown, conventional collector current can flow strongly when what condition is established in normal active/switching use?",
      "options": [
        "The base-emitter junction is forward biased sufficiently relative to the emitter.",
        "The collector-base junction alone is forward biased while the base-emitter junction is reverse biased.",
        "The emitter is left open circuit.",
        "The base is always at exactly the same potential as the emitter."
      ],
      "answer": 0,
      "explanation": "For a silicon NPN device, sufficient base-emitter forward bias enables transistor conduction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE137",
      "section": "23.10",
      "topic": "Diodes",
      "question": "What feature of the diode characteristic shown explains rectification?",
      "options": [
        "The reverse region always carries the same current as the forward region.",
        "Forward current decreases as forward voltage increases.",
        "The device conducts much more readily in one polarity than the other.",
        "The device has equal resistance in both polarities."
      ],
      "answer": 2,
      "explanation": "A diode is strongly nonlinear and preferentially conducts in the forward direction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Semiconductor characteristic curve</div>\n<svg viewBox=\"0 0 720 290\" role=\"img\" aria-label=\"Semiconductor characteristic curve\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"288\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">DIODE CURRENT–VOLTAGE CHARACTERISTIC</text><line x1=\"80\" y1=\"220\" x2=\"650\" y2=\"220\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"300\" y1=\"45\" x2=\"300\" y2=\"270\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"648\" y=\"244\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Voltage</text><text x=\"270\" y=\"55\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Current</text><path d=\"M 315 217 C 390 215, 430 205, 460 170 C 495 125, 510 75, 520 55\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><path d=\"M 285 223 C 220 225, 150 226, 100 230\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"480\" y=\"190\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">forward region</text><text x=\"130\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">reverse leakage</text></svg></div>",
      "concept": "SPE-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE138",
      "section": "23.10",
      "topic": "Diodes",
      "question": "During troubleshooting, which answer is MOST accurate? What feature of the diode characteristic shown explains rectification?",
      "options": [
        "Forward current decreases as forward voltage increases.",
        "The device conducts much more readily in one polarity than the other.",
        "The device has equal resistance in both polarities.",
        "The reverse region always carries the same current as the forward region."
      ],
      "answer": 1,
      "explanation": "A diode is strongly nonlinear and preferentially conducts in the forward direction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Rectifier waveform</div>\n<svg viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Rectifier waveform\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"248\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">FULL-WAVE RECTIFIER OUTPUT</text><line x1=\"50\" y1=\"115\" x2=\"345\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"60,115.0 63,111.9 66,108.9 69,105.8 72,102.8 75,99.9 78,97.0 81,94.2 84,91.5 87,89.0 90,86.5 93,84.2 96,82.0 99,80.0 102,78.1 105,76.5 108,75.0 111,73.7 114,72.5 117,71.6 120,70.9 123,70.4 126,70.1 129,70.0 132,70.1 135,70.5 138,71.0 141,71.8 144,72.7 147,73.9 150,75.2 153,76.7 156,78.4 159,80.3 162,82.4 165,84.6 168,86.9 171,89.4 174,92.0 177,94.7 180,97.5 183,100.4 186,103.3 189,106.3 192,109.4 195,112.4 198,115.5 201,118.6 204,121.7 207,124.7 210,127.7 213,130.6 216,133.5 219,136.2 222,138.9 225,141.5 228,143.9 231,146.2 234,148.3 237,150.3 240,152.1 243,153.8 246,155.3 249,156.5 252,157.6 255,158.5 258,159.2 261,159.7 264,159.9 267,160.0 270,159.8 273,159.5 276,158.9 279,158.1 282,157.1 285,155.9 288,154.6 291,153.0 294,151.3 297,149.3 300,147.3 303,145.0 306,142.7 309,140.2 312,137.6 315,134.9 318,132.0 321,129.1 324,126.2 327,123.2 330,120.1 333,117.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"195\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC input</text><line x1=\"385\" y1=\"115\" x2=\"680\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"395,115.0 398,111.9 401,108.9 404,105.8 407,102.8 410,99.9 413,97.0 416,94.2 419,91.5 422,89.0 425,86.5 428,84.2 431,82.0 434,80.0 437,78.1 440,76.5 443,75.0 446,73.7 449,72.5 452,71.6 455,70.9 458,70.4 461,70.1 464,70.0 467,70.1 470,70.5 473,71.0 476,71.8 479,72.7 482,73.9 485,75.2 488,76.7 491,78.4 494,80.3 497,82.4 500,84.6 503,86.9 506,89.4 509,92.0 512,94.7 515,97.5 518,100.4 521,103.3 524,106.3 527,109.4 530,112.4 533,114.5 536,111.4 539,108.3 542,105.3 545,102.3 548,99.4 551,96.5 554,93.8 557,91.1 560,88.5 563,86.1 566,83.8 569,81.7 572,79.7 575,77.9 578,76.2 581,74.7 584,73.5 587,72.4 590,71.5 593,70.8 596,70.3 599,70.1 602,70.0 605,70.2 608,70.5 611,71.1 614,71.9 617,72.9 620,74.1 623,75.4 626,77.0 629,78.7 632,80.7 635,82.7 638,85.0 641,87.3 644,89.8 647,92.4 650,95.1 653,98.0 656,100.9 659,103.8 662,106.8 665,109.9 668,112.9\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"535\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Rectified output</text><text x=\"360\" y=\"220\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Both half-cycles produce load current in the same direction.</text></svg></div>",
      "concept": "SPE-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE139",
      "section": "23.10",
      "topic": "Diodes",
      "question": "An AME E technician is evaluating the system. What feature of the diode characteristic shown explains rectification?",
      "options": [
        "The device conducts much more readily in one polarity than the other.",
        "The device has equal resistance in both polarities.",
        "The reverse region always carries the same current as the forward region.",
        "Forward current decreases as forward voltage increases."
      ],
      "answer": 0,
      "explanation": "A diode is strongly nonlinear and preferentially conducts in the forward direction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Semiconductor characteristic curve</div>\n<svg viewBox=\"0 0 720 290\" role=\"img\" aria-label=\"Semiconductor characteristic curve\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"288\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">DIODE CURRENT–VOLTAGE CHARACTERISTIC</text><line x1=\"80\" y1=\"220\" x2=\"650\" y2=\"220\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"300\" y1=\"45\" x2=\"300\" y2=\"270\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"648\" y=\"244\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Voltage</text><text x=\"270\" y=\"55\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Current</text><path d=\"M 315 217 C 390 215, 430 205, 460 170 C 495 125, 510 75, 520 55\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><path d=\"M 285 223 C 220 225, 150 226, 100 230\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"480\" y=\"190\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">forward region</text><text x=\"130\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">reverse leakage</text></svg></div>",
      "concept": "SPE-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE140",
      "section": "23.10",
      "topic": "Diodes",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What feature of the diode characteristic shown explains rectification?",
      "options": [
        "The device has equal resistance in both polarities.",
        "The reverse region always carries the same current as the forward region.",
        "Forward current decreases as forward voltage increases.",
        "The device conducts much more readily in one polarity than the other."
      ],
      "answer": 3,
      "explanation": "A diode is strongly nonlinear and preferentially conducts in the forward direction.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE141",
      "section": "23.11",
      "topic": "Rectifiers",
      "question": "What is the principal output of an ideal four-diode bridge rectifier supplied with AC?",
      "options": [
        "Half-wave DC using only one half-cycle.",
        "Full-wave pulsating DC of one polarity.",
        "A higher-frequency AC waveform that alternates equally positive and negative.",
        "Pure steady DC with zero ripple without any filtering."
      ],
      "answer": 1,
      "explanation": "A bridge rectifier redirects both AC half-cycles to the same output polarity; filtering is needed for smoother DC.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Rectifier waveform</div>\n<svg viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Rectifier waveform\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"248\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">FULL-WAVE RECTIFIER OUTPUT</text><line x1=\"50\" y1=\"115\" x2=\"345\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"60,115.0 63,111.9 66,108.9 69,105.8 72,102.8 75,99.9 78,97.0 81,94.2 84,91.5 87,89.0 90,86.5 93,84.2 96,82.0 99,80.0 102,78.1 105,76.5 108,75.0 111,73.7 114,72.5 117,71.6 120,70.9 123,70.4 126,70.1 129,70.0 132,70.1 135,70.5 138,71.0 141,71.8 144,72.7 147,73.9 150,75.2 153,76.7 156,78.4 159,80.3 162,82.4 165,84.6 168,86.9 171,89.4 174,92.0 177,94.7 180,97.5 183,100.4 186,103.3 189,106.3 192,109.4 195,112.4 198,115.5 201,118.6 204,121.7 207,124.7 210,127.7 213,130.6 216,133.5 219,136.2 222,138.9 225,141.5 228,143.9 231,146.2 234,148.3 237,150.3 240,152.1 243,153.8 246,155.3 249,156.5 252,157.6 255,158.5 258,159.2 261,159.7 264,159.9 267,160.0 270,159.8 273,159.5 276,158.9 279,158.1 282,157.1 285,155.9 288,154.6 291,153.0 294,151.3 297,149.3 300,147.3 303,145.0 306,142.7 309,140.2 312,137.6 315,134.9 318,132.0 321,129.1 324,126.2 327,123.2 330,120.1 333,117.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"195\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC input</text><line x1=\"385\" y1=\"115\" x2=\"680\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"395,115.0 398,111.9 401,108.9 404,105.8 407,102.8 410,99.9 413,97.0 416,94.2 419,91.5 422,89.0 425,86.5 428,84.2 431,82.0 434,80.0 437,78.1 440,76.5 443,75.0 446,73.7 449,72.5 452,71.6 455,70.9 458,70.4 461,70.1 464,70.0 467,70.1 470,70.5 473,71.0 476,71.8 479,72.7 482,73.9 485,75.2 488,76.7 491,78.4 494,80.3 497,82.4 500,84.6 503,86.9 506,89.4 509,92.0 512,94.7 515,97.5 518,100.4 521,103.3 524,106.3 527,109.4 530,112.4 533,114.5 536,111.4 539,108.3 542,105.3 545,102.3 548,99.4 551,96.5 554,93.8 557,91.1 560,88.5 563,86.1 566,83.8 569,81.7 572,79.7 575,77.9 578,76.2 581,74.7 584,73.5 587,72.4 590,71.5 593,70.8 596,70.3 599,70.1 602,70.0 605,70.2 608,70.5 611,71.1 614,71.9 617,72.9 620,74.1 623,75.4 626,77.0 629,78.7 632,80.7 635,82.7 638,85.0 641,87.3 644,89.8 647,92.4 650,95.1 653,98.0 656,100.9 659,103.8 662,106.8 665,109.9 668,112.9\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"535\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Rectified output</text><text x=\"360\" y=\"220\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Both half-cycles produce load current in the same direction.</text></svg></div>",
      "concept": "SPE-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE142",
      "section": "23.11",
      "topic": "Rectifiers",
      "question": "During troubleshooting, which answer is MOST accurate? What is the principal output of an ideal four-diode bridge rectifier supplied with AC?",
      "options": [
        "Full-wave pulsating DC of one polarity.",
        "A higher-frequency AC waveform that alternates equally positive and negative.",
        "Pure steady DC with zero ripple without any filtering.",
        "Half-wave DC using only one half-cycle."
      ],
      "answer": 0,
      "explanation": "A bridge rectifier redirects both AC half-cycles to the same output polarity; filtering is needed for smoother DC.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Semiconductor characteristic curve</div>\n<svg viewBox=\"0 0 720 290\" role=\"img\" aria-label=\"Semiconductor characteristic curve\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"288\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">DIODE CURRENT–VOLTAGE CHARACTERISTIC</text><line x1=\"80\" y1=\"220\" x2=\"650\" y2=\"220\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"300\" y1=\"45\" x2=\"300\" y2=\"270\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"648\" y=\"244\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Voltage</text><text x=\"270\" y=\"55\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">Current</text><path d=\"M 315 217 C 390 215, 430 205, 460 170 C 495 125, 510 75, 520 55\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><path d=\"M 285 223 C 220 225, 150 226, 100 230\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"480\" y=\"190\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">forward region</text><text x=\"130\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">reverse leakage</text></svg></div>",
      "concept": "SPE-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE143",
      "section": "23.11",
      "topic": "Rectifiers",
      "question": "An AME E technician is evaluating the system. What is the principal output of an ideal four-diode bridge rectifier supplied with AC?",
      "options": [
        "A higher-frequency AC waveform that alternates equally positive and negative.",
        "Pure steady DC with zero ripple without any filtering.",
        "Half-wave DC using only one half-cycle.",
        "Full-wave pulsating DC of one polarity."
      ],
      "answer": 3,
      "explanation": "A bridge rectifier redirects both AC half-cycles to the same output polarity; filtering is needed for smoother DC.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Rectifier waveform</div>\n<svg viewBox=\"0 0 720 250\" role=\"img\" aria-label=\"Rectifier waveform\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"248\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">FULL-WAVE RECTIFIER OUTPUT</text><line x1=\"50\" y1=\"115\" x2=\"345\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"60,115.0 63,111.9 66,108.9 69,105.8 72,102.8 75,99.9 78,97.0 81,94.2 84,91.5 87,89.0 90,86.5 93,84.2 96,82.0 99,80.0 102,78.1 105,76.5 108,75.0 111,73.7 114,72.5 117,71.6 120,70.9 123,70.4 126,70.1 129,70.0 132,70.1 135,70.5 138,71.0 141,71.8 144,72.7 147,73.9 150,75.2 153,76.7 156,78.4 159,80.3 162,82.4 165,84.6 168,86.9 171,89.4 174,92.0 177,94.7 180,97.5 183,100.4 186,103.3 189,106.3 192,109.4 195,112.4 198,115.5 201,118.6 204,121.7 207,124.7 210,127.7 213,130.6 216,133.5 219,136.2 222,138.9 225,141.5 228,143.9 231,146.2 234,148.3 237,150.3 240,152.1 243,153.8 246,155.3 249,156.5 252,157.6 255,158.5 258,159.2 261,159.7 264,159.9 267,160.0 270,159.8 273,159.5 276,158.9 279,158.1 282,157.1 285,155.9 288,154.6 291,153.0 294,151.3 297,149.3 300,147.3 303,145.0 306,142.7 309,140.2 312,137.6 315,134.9 318,132.0 321,129.1 324,126.2 327,123.2 330,120.1 333,117.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"195\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC input</text><line x1=\"385\" y1=\"115\" x2=\"680\" y2=\"115\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"395,115.0 398,111.9 401,108.9 404,105.8 407,102.8 410,99.9 413,97.0 416,94.2 419,91.5 422,89.0 425,86.5 428,84.2 431,82.0 434,80.0 437,78.1 440,76.5 443,75.0 446,73.7 449,72.5 452,71.6 455,70.9 458,70.4 461,70.1 464,70.0 467,70.1 470,70.5 473,71.0 476,71.8 479,72.7 482,73.9 485,75.2 488,76.7 491,78.4 494,80.3 497,82.4 500,84.6 503,86.9 506,89.4 509,92.0 512,94.7 515,97.5 518,100.4 521,103.3 524,106.3 527,109.4 530,112.4 533,114.5 536,111.4 539,108.3 542,105.3 545,102.3 548,99.4 551,96.5 554,93.8 557,91.1 560,88.5 563,86.1 566,83.8 569,81.7 572,79.7 575,77.9 578,76.2 581,74.7 584,73.5 587,72.4 590,71.5 593,70.8 596,70.3 599,70.1 602,70.0 605,70.2 608,70.5 611,71.1 614,71.9 617,72.9 620,74.1 623,75.4 626,77.0 629,78.7 632,80.7 635,82.7 638,85.0 641,87.3 644,89.8 647,92.4 650,95.1 653,98.0 656,100.9 659,103.8 662,106.8 665,109.9 668,112.9\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"3\"/><text x=\"535\" y=\"50\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Rectified output</text><text x=\"360\" y=\"220\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Both half-cycles produce load current in the same direction.</text></svg></div>",
      "concept": "SPE-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE144",
      "section": "23.11",
      "topic": "Rectifiers",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the principal output of an ideal four-diode bridge rectifier supplied with AC?",
      "options": [
        "Pure steady DC with zero ripple without any filtering.",
        "Half-wave DC using only one half-cycle.",
        "Full-wave pulsating DC of one polarity.",
        "A higher-frequency AC waveform that alternates equally positive and negative."
      ],
      "answer": 2,
      "explanation": "A bridge rectifier redirects both AC half-cycles to the same output polarity; filtering is needed for smoother DC.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE145",
      "section": "23.15",
      "topic": "Synchros",
      "question": "The synchro transmitter and receiver shown are aligned. If the transmitter rotor is moved and the circuit is serviceable, what should the receiver tend to do?",
      "options": [
        "Rotate toward the corresponding angular position.",
        "Remain fixed because synchros transmit only speed, not position.",
        "Rotate exactly 180° opposite regardless of wiring.",
        "Produce DC power for the transmitter."
      ],
      "answer": 0,
      "explanation": "Synchro systems transmit angular-position information by AC electromagnetic coupling.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE146",
      "section": "23.15",
      "topic": "Synchros",
      "question": "During troubleshooting, which answer is MOST accurate? The synchro transmitter and receiver shown are aligned. If the transmitter rotor is moved and the circuit is serviceable, what should the receiver tend to do?",
      "options": [
        "Remain fixed because synchros transmit only speed, not position.",
        "Rotate exactly 180° opposite regardless of wiring.",
        "Produce DC power for the transmitter.",
        "Rotate toward the corresponding angular position."
      ],
      "answer": 3,
      "explanation": "Synchro systems transmit angular-position information by AC electromagnetic coupling.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "concept": "SPE-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE147",
      "section": "23.15",
      "topic": "Synchros",
      "question": "An AME E technician is evaluating the system. The synchro transmitter and receiver shown are aligned. If the transmitter rotor is moved and the circuit is serviceable, what should the receiver tend to do?",
      "options": [
        "Rotate exactly 180° opposite regardless of wiring.",
        "Produce DC power for the transmitter.",
        "Rotate toward the corresponding angular position.",
        "Remain fixed because synchros transmit only speed, not position."
      ],
      "answer": 2,
      "explanation": "Synchro systems transmit angular-position information by AC electromagnetic coupling.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE148",
      "section": "23.15",
      "topic": "Synchros",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The synchro transmitter and receiver shown are aligned. If the transmitter rotor is moved and the circuit is serviceable, what should the receiver tend to do?",
      "options": [
        "Produce DC power for the transmitter.",
        "Rotate toward the corresponding angular position.",
        "Remain fixed because synchros transmit only speed, not position.",
        "Rotate exactly 180° opposite regardless of wiring."
      ],
      "answer": 1,
      "explanation": "Synchro systems transmit angular-position information by AC electromagnetic coupling.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE149",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "What is hexadecimal 2F in decimal?",
      "options": [
        "31.",
        "45.",
        "52.",
        "47."
      ],
      "answer": 3,
      "explanation": "2F₁₆ = 2×16 + 15 = 47.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE150",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "During troubleshooting, which answer is MOST accurate? What is hexadecimal 2F in decimal?",
      "options": [
        "45.",
        "52.",
        "47.",
        "31."
      ],
      "answer": 2,
      "explanation": "2F₁₆ = 2×16 + 15 = 47.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE151",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "An AME E technician is evaluating the system. What is hexadecimal 2F in decimal?",
      "options": [
        "52.",
        "47.",
        "31.",
        "45."
      ],
      "answer": 1,
      "explanation": "2F₁₆ = 2×16 + 15 = 47.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE152",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is hexadecimal 2F in decimal?",
      "options": [
        "47.",
        "31.",
        "45.",
        "52."
      ],
      "answer": 0,
      "explanation": "2F₁₆ = 2×16 + 15 = 47.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE153",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "What is binary 101101 in decimal?",
      "options": [
        "53.",
        "37.",
        "45.",
        "44."
      ],
      "answer": 2,
      "explanation": "101101₂ = 32 + 8 + 4 + 1 = 45.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE154",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "During troubleshooting, which answer is MOST accurate? What is binary 101101 in decimal?",
      "options": [
        "37.",
        "45.",
        "44.",
        "53."
      ],
      "answer": 1,
      "explanation": "101101₂ = 32 + 8 + 4 + 1 = 45.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE155",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "An AME E technician is evaluating the system. What is binary 101101 in decimal?",
      "options": [
        "45.",
        "44.",
        "53.",
        "37."
      ],
      "answer": 0,
      "explanation": "101101₂ = 32 + 8 + 4 + 1 = 45.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE156",
      "section": "23.16",
      "topic": "Number Systems",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is binary 101101 in decimal?",
      "options": [
        "44.",
        "53.",
        "37.",
        "45."
      ],
      "answer": 3,
      "explanation": "101101₂ = 32 + 8 + 4 + 1 = 45.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Binary / hexadecimal conversion chart</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Binary / hexadecimal conversion chart\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NUMBER-SYSTEM REFERENCE</text><text x=\"165\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Decimal</text><text x=\"360\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Binary</text><text x=\"555\" y=\"72\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Hex</text><text x=\"165\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"360\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0000</text><text x=\"555\" y=\"100\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"165\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"360\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0001</text><text x=\"555\" y=\"111\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"165\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"360\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0010</text><text x=\"555\" y=\"122\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">2</text><text x=\"165\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"360\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0011</text><text x=\"555\" y=\"133\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">3</text><text x=\"165\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"360\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0100</text><text x=\"555\" y=\"144\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">4</text><text x=\"165\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"360\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0101</text><text x=\"555\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">5</text><text x=\"165\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"360\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0110</text><text x=\"555\" y=\"166\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">6</text><text x=\"165\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"360\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0111</text><text x=\"555\" y=\"177\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">7</text><text x=\"165\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"360\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1000</text><text x=\"555\" y=\"188\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">8</text><text x=\"165\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"360\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1001</text><text x=\"555\" y=\"199\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">9</text><text x=\"165\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">10</text><text x=\"360\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1010</text><text x=\"555\" y=\"210\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"165\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">11</text><text x=\"360\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1011</text><text x=\"555\" y=\"221\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"165\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">12</text><text x=\"360\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1100</text><text x=\"555\" y=\"232\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">C</text><text x=\"165\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">13</text><text x=\"360\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1101</text><text x=\"555\" y=\"243\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">D</text><text x=\"165\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">14</text><text x=\"360\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1110</text><text x=\"555\" y=\"254\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">E</text><text x=\"165\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">15</text><text x=\"360\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1111</text><text x=\"555\" y=\"265\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">F</text></svg></div>",
      "concept": "SPE-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE157",
      "section": "23.19",
      "topic": "Electrical Load",
      "question": "A 28 V DC bus supplies a 280 W heater. Ignoring losses, approximately how much current does the heater draw?",
      "options": [
        "0.1 A.",
        "10 A.",
        "7.8 A.",
        "28 A."
      ],
      "answer": 1,
      "explanation": "P = VI, so I = 280/28 = 10 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE158",
      "section": "23.19",
      "topic": "Electrical Load",
      "question": "During troubleshooting, which answer is MOST accurate? A 28 V DC bus supplies a 280 W heater. Ignoring losses, approximately how much current does the heater draw?",
      "options": [
        "10 A.",
        "7.8 A.",
        "28 A.",
        "0.1 A."
      ],
      "answer": 0,
      "explanation": "P = VI, so I = 280/28 = 10 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE159",
      "section": "23.19",
      "topic": "Electrical Load",
      "question": "An AME E technician is evaluating the system. A 28 V DC bus supplies a 280 W heater. Ignoring losses, approximately how much current does the heater draw?",
      "options": [
        "7.8 A.",
        "28 A.",
        "0.1 A.",
        "10 A."
      ],
      "answer": 3,
      "explanation": "P = VI, so I = 280/28 = 10 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE160",
      "section": "23.19",
      "topic": "Electrical Load",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A 28 V DC bus supplies a 280 W heater. Ignoring losses, approximately how much current does the heater draw?",
      "options": [
        "28 A.",
        "0.1 A.",
        "10 A.",
        "7.8 A."
      ],
      "answer": 2,
      "explanation": "P = VI, so I = 280/28 = 10 A.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE161",
      "section": "3.2",
      "topic": "Connectors",
      "question": "A crimp contact is pulled from a connector after insertion with light force. Which condition is most likely?",
      "options": [
        "The contact retention mechanism is not properly engaged or the wrong contact/tooling was used.",
        "A correctly seated contact should be removable by pulling the wire to verify freedom.",
        "The connector shell must be overtorqued to retain the contact.",
        "The wire insulation should carry contact retention load."
      ],
      "answer": 0,
      "explanation": "Contacts must lock into the insert and be verified using approved insertion/retention practices.",
      "visual": null,
      "concept": "SPE-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE162",
      "section": "3.2",
      "topic": "Connectors",
      "question": "During troubleshooting, which answer is MOST accurate? A crimp contact is pulled from a connector after insertion with light force. Which condition is most likely?",
      "options": [
        "A correctly seated contact should be removable by pulling the wire to verify freedom.",
        "The connector shell must be overtorqued to retain the contact.",
        "The wire insulation should carry contact retention load.",
        "The contact retention mechanism is not properly engaged or the wrong contact/tooling was used."
      ],
      "answer": 3,
      "explanation": "Contacts must lock into the insert and be verified using approved insertion/retention practices.",
      "visual": null,
      "concept": "SPE-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE163",
      "section": "3.2",
      "topic": "Connectors",
      "question": "An AME E technician is evaluating the system. A crimp contact is pulled from a connector after insertion with light force. Which condition is most likely?",
      "options": [
        "The connector shell must be overtorqued to retain the contact.",
        "The wire insulation should carry contact retention load.",
        "The contact retention mechanism is not properly engaged or the wrong contact/tooling was used.",
        "A correctly seated contact should be removable by pulling the wire to verify freedom."
      ],
      "answer": 2,
      "explanation": "Contacts must lock into the insert and be verified using approved insertion/retention practices.",
      "visual": null,
      "concept": "SPE-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE164",
      "section": "3.2",
      "topic": "Connectors",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A crimp contact is pulled from a connector after insertion with light force. Which condition is most likely?",
      "options": [
        "The wire insulation should carry contact retention load.",
        "The contact retention mechanism is not properly engaged or the wrong contact/tooling was used.",
        "A correctly seated contact should be removable by pulling the wire to verify freedom.",
        "The connector shell must be overtorqued to retain the contact."
      ],
      "answer": 1,
      "explanation": "Contacts must lock into the insert and be verified using approved insertion/retention practices.",
      "visual": null,
      "concept": "SPE-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE165",
      "section": "4.2",
      "topic": "Drawings",
      "question": "A wire number changes after passing through a connector on the wiring diagram. What should the technician conclude first?",
      "options": [
        "The two segments cannot be electrically continuous because the numbers differ.",
        "The connector must contain an active electronic component.",
        "Wire numbers are decorative and should be ignored during troubleshooting.",
        "Trace the diagram convention and connector pin references; the change may identify a new wire segment, not a different electrical function."
      ],
      "answer": 3,
      "explanation": "Wire identification conventions help trace segments and terminations; continuity depends on the depicted connection.",
      "visual": null,
      "concept": "SPE-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE166",
      "section": "4.2",
      "topic": "Drawings",
      "question": "During troubleshooting, which answer is MOST accurate? A wire number changes after passing through a connector on the wiring diagram. What should the technician conclude first?",
      "options": [
        "The connector must contain an active electronic component.",
        "Wire numbers are decorative and should be ignored during troubleshooting.",
        "Trace the diagram convention and connector pin references; the change may identify a new wire segment, not a different electrical function.",
        "The two segments cannot be electrically continuous because the numbers differ."
      ],
      "answer": 2,
      "explanation": "Wire identification conventions help trace segments and terminations; continuity depends on the depicted connection.",
      "visual": null,
      "concept": "SPE-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE167",
      "section": "4.2",
      "topic": "Drawings",
      "question": "An AME E technician is evaluating the system. A wire number changes after passing through a connector on the wiring diagram. What should the technician conclude first?",
      "options": [
        "Wire numbers are decorative and should be ignored during troubleshooting.",
        "Trace the diagram convention and connector pin references; the change may identify a new wire segment, not a different electrical function.",
        "The two segments cannot be electrically continuous because the numbers differ.",
        "The connector must contain an active electronic component."
      ],
      "answer": 1,
      "explanation": "Wire identification conventions help trace segments and terminations; continuity depends on the depicted connection.",
      "visual": null,
      "concept": "SPE-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE168",
      "section": "4.2",
      "topic": "Drawings",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A wire number changes after passing through a connector on the wiring diagram. What should the technician conclude first?",
      "options": [
        "Trace the diagram convention and connector pin references; the change may identify a new wire segment, not a different electrical function.",
        "The two segments cannot be electrically continuous because the numbers differ.",
        "The connector must contain an active electronic component.",
        "Wire numbers are decorative and should be ignored during troubleshooting."
      ],
      "answer": 0,
      "explanation": "Wire identification conventions help trace segments and terminations; continuity depends on the depicted connection.",
      "visual": null,
      "concept": "SPE-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE169",
      "section": "12.4",
      "topic": "Meters",
      "question": "Why can measuring resistance across an in-circuit component give a lower value than expected?",
      "options": [
        "Resistance always increases when measured in circuit.",
        "The meter reads only inductive reactance on resistance range.",
        "Parallel circuit paths may be included in the meter reading.",
        "An ohmmeter automatically removes all parallel paths."
      ],
      "answer": 2,
      "explanation": "In-circuit measurements can include other conductive paths, so isolation may be necessary.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE170",
      "section": "12.4",
      "topic": "Meters",
      "question": "During troubleshooting, which answer is MOST accurate? Why can measuring resistance across an in-circuit component give a lower value than expected?",
      "options": [
        "The meter reads only inductive reactance on resistance range.",
        "Parallel circuit paths may be included in the meter reading.",
        "An ohmmeter automatically removes all parallel paths.",
        "Resistance always increases when measured in circuit."
      ],
      "answer": 1,
      "explanation": "In-circuit measurements can include other conductive paths, so isolation may be necessary.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE171",
      "section": "12.4",
      "topic": "Meters",
      "question": "An AME E technician is evaluating the system. Why can measuring resistance across an in-circuit component give a lower value than expected?",
      "options": [
        "Parallel circuit paths may be included in the meter reading.",
        "An ohmmeter automatically removes all parallel paths.",
        "Resistance always increases when measured in circuit.",
        "The meter reads only inductive reactance on resistance range."
      ],
      "answer": 0,
      "explanation": "In-circuit measurements can include other conductive paths, so isolation may be necessary.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE172",
      "section": "12.4",
      "topic": "Meters",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why can measuring resistance across an in-circuit component give a lower value than expected?",
      "options": [
        "An ohmmeter automatically removes all parallel paths.",
        "Resistance always increases when measured in circuit.",
        "The meter reads only inductive reactance on resistance range.",
        "Parallel circuit paths may be included in the meter reading."
      ],
      "answer": 3,
      "explanation": "In-circuit measurements can include other conductive paths, so isolation may be necessary.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE173",
      "section": "23.6",
      "topic": "Reactance",
      "question": "If AC frequency increases while capacitance remains constant, what happens to capacitive reactance?",
      "options": [
        "It becomes equal to inductive reactance in every circuit.",
        "It decreases.",
        "It increases in direct proportion.",
        "It remains unchanged because capacitance is fixed."
      ],
      "answer": 1,
      "explanation": "Xc = 1/(2πfC), so capacitive reactance falls as frequency rises.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE174",
      "section": "23.6",
      "topic": "Reactance",
      "question": "During troubleshooting, which answer is MOST accurate? If AC frequency increases while capacitance remains constant, what happens to capacitive reactance?",
      "options": [
        "It decreases.",
        "It increases in direct proportion.",
        "It remains unchanged because capacitance is fixed.",
        "It becomes equal to inductive reactance in every circuit."
      ],
      "answer": 0,
      "explanation": "Xc = 1/(2πfC), so capacitive reactance falls as frequency rises.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RC charging graph</div>\n<svg viewBox=\"0 0 720 285\" role=\"img\" aria-label=\"RC charging graph\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"283\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">CAPACITOR CHARGING CURVE</text><line x1=\"70\" y1=\"235\" x2=\"660\" y2=\"235\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"245\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"80,235.0 84,229.3 88,223.8 92,218.5 96,213.4 100,208.4 104,203.7 108,199.1 112,194.6 116,190.3 120,186.2 124,182.2 128,178.3 132,174.6 136,171.0 140,167.5 144,164.1 148,160.9 152,157.7 156,154.7 160,151.8 164,149.0 168,146.2 172,143.6 176,141.1 180,138.6 184,136.3 188,134.0 192,131.8 196,129.6 200,127.6 204,125.6 208,123.7 212,121.8 216,120.0 220,118.3 224,116.7 228,115.0 232,113.5 236,112.0 240,110.5 244,109.1 248,107.8 252,106.5 256,105.2 260,104.0 264,102.8 268,101.7 272,100.6 276,99.6 280,98.5 284,97.6 288,96.6 292,95.7 296,94.8 300,94.0 304,93.1 308,92.3 312,91.6 316,90.8 320,90.1 324,89.4 328,88.7 332,88.1 336,87.5 340,86.9 344,86.3 348,85.7 352,85.2 356,84.7 360,84.2 364,83.7 368,83.2 372,82.7 376,82.3 380,81.9 384,81.5 388,81.1 392,80.7 396,80.3 400,80.0 404,79.6 408,79.3 412,79.0 416,78.7 420,78.4 424,78.1 428,77.8 432,77.5 436,77.3 440,77.0 444,76.8 448,76.5 452,76.3 456,76.1 460,75.9 464,75.7 468,75.5 472,75.3 476,75.1 480,74.9 484,74.8 488,74.6 492,74.4 496,74.3 500,74.1 504,74.0 508,73.9 512,73.7 516,73.6 520,73.5 524,73.4 528,73.2 532,73.1 536,73.0 540,72.9 544,72.8 548,72.7 552,72.6 556,72.5 560,72.4 564,72.4 568,72.3 572,72.2 576,72.1 580,72.1 584,72.0 588,71.9 592,71.8 596,71.8 600,71.7 604,71.7 608,71.6 612,71.6 616,71.5 620,71.4 624,71.4 628,71.3 632,71.3 636,71.3 640,71.2 644,71.2 648,71.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"194\" y1=\"70\" x2=\"194\" y2=\"235\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"194\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">1τ</text><text x=\"210\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">≈63.2% of final voltage at 1 time constant</text></svg></div>",
      "concept": "SPE-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE175",
      "section": "23.6",
      "topic": "Reactance",
      "question": "An AME E technician is evaluating the system. If AC frequency increases while capacitance remains constant, what happens to capacitive reactance?",
      "options": [
        "It increases in direct proportion.",
        "It remains unchanged because capacitance is fixed.",
        "It becomes equal to inductive reactance in every circuit.",
        "It decreases."
      ],
      "answer": 3,
      "explanation": "Xc = 1/(2πfC), so capacitive reactance falls as frequency rises.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE176",
      "section": "23.6",
      "topic": "Reactance",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. If AC frequency increases while capacitance remains constant, what happens to capacitive reactance?",
      "options": [
        "It remains unchanged because capacitance is fixed.",
        "It becomes equal to inductive reactance in every circuit.",
        "It decreases.",
        "It increases in direct proportion."
      ],
      "answer": 2,
      "explanation": "Xc = 1/(2πfC), so capacitive reactance falls as frequency rises.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "concept": "SPE-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE177",
      "section": "23.6",
      "topic": "Reactance",
      "question": "If AC frequency increases through a fixed inductor, what happens to inductive reactance?",
      "options": [
        "It increases.",
        "It decreases.",
        "It remains constant.",
        "It becomes zero above resonance regardless of circuit."
      ],
      "answer": 0,
      "explanation": "XL = 2πfL, so inductive reactance increases with frequency.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE178",
      "section": "23.6",
      "topic": "Reactance",
      "question": "During troubleshooting, which answer is MOST accurate? If AC frequency increases through a fixed inductor, what happens to inductive reactance?",
      "options": [
        "It decreases.",
        "It remains constant.",
        "It becomes zero above resonance regardless of circuit.",
        "It increases."
      ],
      "answer": 3,
      "explanation": "XL = 2πfL, so inductive reactance increases with frequency.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RC charging graph</div>\n<svg viewBox=\"0 0 720 285\" role=\"img\" aria-label=\"RC charging graph\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"283\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">CAPACITOR CHARGING CURVE</text><line x1=\"70\" y1=\"235\" x2=\"660\" y2=\"235\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"245\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"80,235.0 84,229.3 88,223.8 92,218.5 96,213.4 100,208.4 104,203.7 108,199.1 112,194.6 116,190.3 120,186.2 124,182.2 128,178.3 132,174.6 136,171.0 140,167.5 144,164.1 148,160.9 152,157.7 156,154.7 160,151.8 164,149.0 168,146.2 172,143.6 176,141.1 180,138.6 184,136.3 188,134.0 192,131.8 196,129.6 200,127.6 204,125.6 208,123.7 212,121.8 216,120.0 220,118.3 224,116.7 228,115.0 232,113.5 236,112.0 240,110.5 244,109.1 248,107.8 252,106.5 256,105.2 260,104.0 264,102.8 268,101.7 272,100.6 276,99.6 280,98.5 284,97.6 288,96.6 292,95.7 296,94.8 300,94.0 304,93.1 308,92.3 312,91.6 316,90.8 320,90.1 324,89.4 328,88.7 332,88.1 336,87.5 340,86.9 344,86.3 348,85.7 352,85.2 356,84.7 360,84.2 364,83.7 368,83.2 372,82.7 376,82.3 380,81.9 384,81.5 388,81.1 392,80.7 396,80.3 400,80.0 404,79.6 408,79.3 412,79.0 416,78.7 420,78.4 424,78.1 428,77.8 432,77.5 436,77.3 440,77.0 444,76.8 448,76.5 452,76.3 456,76.1 460,75.9 464,75.7 468,75.5 472,75.3 476,75.1 480,74.9 484,74.8 488,74.6 492,74.4 496,74.3 500,74.1 504,74.0 508,73.9 512,73.7 516,73.6 520,73.5 524,73.4 528,73.2 532,73.1 536,73.0 540,72.9 544,72.8 548,72.7 552,72.6 556,72.5 560,72.4 564,72.4 568,72.3 572,72.2 576,72.1 580,72.1 584,72.0 588,71.9 592,71.8 596,71.8 600,71.7 604,71.7 608,71.6 612,71.6 616,71.5 620,71.4 624,71.4 628,71.3 632,71.3 636,71.3 640,71.2 644,71.2 648,71.1\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"194\" y1=\"70\" x2=\"194\" y2=\"235\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"194\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">1τ</text><text x=\"210\" y=\"105\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">≈63.2% of final voltage at 1 time constant</text></svg></div>",
      "concept": "SPE-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE179",
      "section": "23.6",
      "topic": "Reactance",
      "question": "An AME E technician is evaluating the system. If AC frequency increases through a fixed inductor, what happens to inductive reactance?",
      "options": [
        "It remains constant.",
        "It becomes zero above resonance regardless of circuit.",
        "It increases.",
        "It decreases."
      ],
      "answer": 2,
      "explanation": "XL = 2πfL, so inductive reactance increases with frequency.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE180",
      "section": "23.6",
      "topic": "Reactance",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. If AC frequency increases through a fixed inductor, what happens to inductive reactance?",
      "options": [
        "It becomes zero above resonance regardless of circuit.",
        "It increases.",
        "It decreases.",
        "It remains constant."
      ],
      "answer": 1,
      "explanation": "XL = 2πfL, so inductive reactance increases with frequency.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "concept": "SPE-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE181",
      "section": "23.6",
      "topic": "Transformer",
      "question": "A transformer has twice as many turns on the secondary as on the primary. Ignoring losses, what is the approximate voltage relationship?",
      "options": [
        "Secondary voltage is half primary voltage.",
        "Secondary current and voltage both double with no power change.",
        "Turns ratio affects frequency but not voltage.",
        "Secondary voltage is twice primary voltage."
      ],
      "answer": 3,
      "explanation": "For an ideal transformer, voltage ratio follows turns ratio.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "concept": "SPE-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE182",
      "section": "23.6",
      "topic": "Transformer",
      "question": "During troubleshooting, which answer is MOST accurate? A transformer has twice as many turns on the secondary as on the primary. Ignoring losses, what is the approximate voltage relationship?",
      "options": [
        "Secondary current and voltage both double with no power change.",
        "Turns ratio affects frequency but not voltage.",
        "Secondary voltage is twice primary voltage.",
        "Secondary voltage is half primary voltage."
      ],
      "answer": 2,
      "explanation": "For an ideal transformer, voltage ratio follows turns ratio.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE183",
      "section": "23.6",
      "topic": "Transformer",
      "question": "An AME E technician is evaluating the system. A transformer has twice as many turns on the secondary as on the primary. Ignoring losses, what is the approximate voltage relationship?",
      "options": [
        "Turns ratio affects frequency but not voltage.",
        "Secondary voltage is twice primary voltage.",
        "Secondary voltage is half primary voltage.",
        "Secondary current and voltage both double with no power change."
      ],
      "answer": 1,
      "explanation": "For an ideal transformer, voltage ratio follows turns ratio.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "concept": "SPE-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE184",
      "section": "23.6",
      "topic": "Transformer",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A transformer has twice as many turns on the secondary as on the primary. Ignoring losses, what is the approximate voltage relationship?",
      "options": [
        "Secondary voltage is twice primary voltage.",
        "Secondary voltage is half primary voltage.",
        "Secondary current and voltage both double with no power change.",
        "Turns ratio affects frequency but not voltage."
      ],
      "answer": 0,
      "explanation": "For an ideal transformer, voltage ratio follows turns ratio.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE185",
      "section": "23.4",
      "topic": "Electromagnetism",
      "question": "Why is a flyback diode often installed across a DC relay coil?",
      "options": [
        "To make the relay operate on AC only.",
        "To provide the primary load-current path through the contacts.",
        "To suppress the high reverse-voltage transient when coil current is interrupted.",
        "To increase steady-state coil resistance."
      ],
      "answer": 2,
      "explanation": "Collapsing magnetic flux can create a large inductive voltage spike; the diode clamps it.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Transformer turns-ratio diagram</div>\n<svg viewBox=\"0 0 720 305\" role=\"img\" aria-label=\"Transformer turns-ratio diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"303\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">IDEAL TRANSFORMER</text><line x1=\"80\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"555\" y1=\"145\" x2=\"640\" y2=\"145\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M 165 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 183 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 201 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 219 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 237 95 q 15 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 400 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 415 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 430 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 445 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 460 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 475 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 490 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 505 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><path d=\"M 520 95 q 12 50 0 100\" fill=\"none\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"345\" y1=\"80\" x2=\"345\" y2=\"215\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"205\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NP = 100 turns</text><text x=\"465\" y=\"230\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">NS = 200 turns</text><text x=\"360\" y=\"280\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VS / VP = NS / NP   (ideal transformer)</text></svg></div>",
      "concept": "SPE-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE186",
      "section": "23.4",
      "topic": "Electromagnetism",
      "question": "During troubleshooting, which answer is MOST accurate? Why is a flyback diode often installed across a DC relay coil?",
      "options": [
        "To provide the primary load-current path through the contacts.",
        "To suppress the high reverse-voltage transient when coil current is interrupted.",
        "To increase steady-state coil resistance.",
        "To make the relay operate on AC only."
      ],
      "answer": 1,
      "explanation": "Collapsing magnetic flux can create a large inductive voltage spike; the diode clamps it.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC phase relationship</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"AC phase relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO AC QUANTITIES – 90° PHASE DIFFERENCE</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,157.2 78,154.4 82,151.6 86,148.8 90,146.0 94,143.3 98,140.6 102,137.9 106,135.3 110,132.7 114,130.2 118,127.7 122,125.3 126,122.9 130,120.7 134,118.5 138,116.3 142,114.3 146,112.3 150,110.5 154,108.7 158,107.0 162,105.4 166,103.9 170,102.6 174,101.3 178,100.2 182,99.1 186,98.2 190,97.4 194,96.7 198,96.1 202,95.6 206,95.3 210,95.1 214,95.0 218,95.0 222,95.2 226,95.5 230,95.9 234,96.4 238,97.0 242,97.8 246,98.6 250,99.6 254,100.7 258,101.9 262,103.2 266,104.7 270,106.2 274,107.8 278,109.6 282,111.4 286,113.3 290,115.3 294,117.4 298,119.6 302,121.8 306,124.1 310,126.5 314,128.9 318,131.4 322,134.0 326,136.6 330,139.2 334,141.9 338,144.7 342,147.4 346,150.2 350,153.0 354,155.8 358,158.6 362,161.4 366,164.2 370,167.0 374,169.8 378,172.6 382,175.3 386,178.1 390,180.8 394,183.4 398,186.0 402,188.6 406,191.1 410,193.5 414,195.9 418,198.2 422,200.4 426,202.6 430,204.7 434,206.7 438,208.6 442,210.4 446,212.2 450,213.8 454,215.3 458,216.8 462,218.1 466,219.3 470,220.4 474,221.4 478,222.2 482,223.0 486,223.6 490,224.1 494,224.5 498,224.8 502,225.0 506,225.0 510,224.9 514,224.7 518,224.4 522,223.9 526,223.3 530,222.6 534,221.8 538,220.9 542,219.8 546,218.7 550,217.4 554,216.1 558,214.6 562,213.0 566,211.3 570,209.5 574,207.7 578,205.7 582,203.7 586,201.5 590,199.3 594,197.1 598,194.7 602,192.3 606,189.8 610,187.3 614,184.7 618,182.1 622,179.4 626,176.7 630,174.0 634,171.2 638,168.4 642,165.6 646,162.8 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><polyline points=\"70,95.0 74,95.1 78,95.2 82,95.5 86,96.0 90,96.5 94,97.2 98,98.0 102,98.9 106,99.9 110,101.0 114,102.2 118,103.6 122,105.0 126,106.6 130,108.3 134,110.0 138,111.9 142,113.8 146,115.8 150,117.9 154,120.1 158,122.4 162,124.7 166,127.1 170,129.6 174,132.1 178,134.6 182,137.3 186,139.9 190,142.6 194,145.3 198,148.1 202,150.9 206,153.7 210,156.5 214,159.3 218,162.1 222,164.9 226,167.7 230,170.5 234,173.3 238,176.0 242,178.7 246,181.4 250,184.1 254,186.7 258,189.2 262,191.7 266,194.1 270,196.5 274,198.8 278,201.0 282,203.1 286,205.2 290,207.2 294,209.1 298,210.9 302,212.6 306,214.2 310,215.7 314,217.1 318,218.4 322,219.6 326,220.6 330,221.6 334,222.4 338,223.2 342,223.8 346,224.3 350,224.6 354,224.9 358,225.0 362,225.0 366,224.9 370,224.6 374,224.3 378,223.8 382,223.2 386,222.4 390,221.6 394,220.6 398,219.6 402,218.4 406,217.1 410,215.7 414,214.2 418,212.6 422,210.9 426,209.1 430,207.2 434,205.2 438,203.1 442,201.0 446,198.8 450,196.5 454,194.1 458,191.7 462,189.2 466,186.7 470,184.1 474,181.4 478,178.7 482,176.0 486,173.3 490,170.5 494,167.7 498,164.9 502,162.1 506,159.3 510,156.5 514,153.7 518,150.9 522,148.1 526,145.3 530,142.6 534,139.9 538,137.3 542,134.6 546,132.1 550,129.6 554,127.1 558,124.7 562,122.4 566,120.1 570,117.9 574,115.8 578,113.8 582,111.9 586,110.0 590,108.3 594,106.6 598,105.0 602,103.6 606,102.2 610,101.0 614,99.9 618,98.9 622,98.0 626,97.2 630,96.5 634,96.0 638,95.5 642,95.2 646,95.1 650,95.0\" fill=\"none\" stroke=\"#d64545\" stroke-width=\"4\"/><text x=\"145\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave A</text><text x=\"255\" y=\"82\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Wave B</text><text x=\"360\" y=\"286\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Identify which waveform leads or lags from the direction of time.</text></svg></div>",
      "concept": "SPE-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE187",
      "section": "23.4",
      "topic": "Electromagnetism",
      "question": "An AME E technician is evaluating the system. Why is a flyback diode often installed across a DC relay coil?",
      "options": [
        "To suppress the high reverse-voltage transient when coil current is interrupted.",
        "To increase steady-state coil resistance.",
        "To make the relay operate on AC only.",
        "To provide the primary load-current path through the contacts."
      ],
      "answer": 0,
      "explanation": "Collapsing magnetic flux can create a large inductive voltage spike; the diode clamps it.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE188",
      "section": "23.4",
      "topic": "Electromagnetism",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is a flyback diode often installed across a DC relay coil?",
      "options": [
        "To increase steady-state coil resistance.",
        "To make the relay operate on AC only.",
        "To provide the primary load-current path through the contacts.",
        "To suppress the high reverse-voltage transient when coil current is interrupted."
      ],
      "answer": 3,
      "explanation": "Collapsing magnetic flux can create a large inductive voltage spike; the diode clamps it.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE189",
      "section": "23.13",
      "topic": "Relays",
      "question": "A relay coil energizes but the controlled load remains off. What should be checked next?",
      "options": [
        "Assume the load is good because the relay can be heard operating.",
        "Contact condition, contact supply and load-side circuit, not just coil continuity.",
        "Replace the coil because any load failure proves the coil is open.",
        "Increase coil voltage above its rating to force the contacts closed."
      ],
      "answer": 1,
      "explanation": "Mechanical operation does not prove contact conductivity or downstream circuit integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE190",
      "section": "23.13",
      "topic": "Relays",
      "question": "During troubleshooting, which answer is MOST accurate? A relay coil energizes but the controlled load remains off. What should be checked next?",
      "options": [
        "Contact condition, contact supply and load-side circuit, not just coil continuity.",
        "Replace the coil because any load failure proves the coil is open.",
        "Increase coil voltage above its rating to force the contacts closed.",
        "Assume the load is good because the relay can be heard operating."
      ],
      "answer": 0,
      "explanation": "Mechanical operation does not prove contact conductivity or downstream circuit integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE191",
      "section": "23.13",
      "topic": "Relays",
      "question": "An AME E technician is evaluating the system. A relay coil energizes but the controlled load remains off. What should be checked next?",
      "options": [
        "Replace the coil because any load failure proves the coil is open.",
        "Increase coil voltage above its rating to force the contacts closed.",
        "Assume the load is good because the relay can be heard operating.",
        "Contact condition, contact supply and load-side circuit, not just coil continuity."
      ],
      "answer": 3,
      "explanation": "Mechanical operation does not prove contact conductivity or downstream circuit integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Logic gate and truth table</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Logic gate and truth table\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"32\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">TWO-INPUT LOGIC</text><text x=\"175\" y=\"73\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AND gate</text><line x1=\"75\" y1=\"115\" x2=\"130\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"75\" y1=\"165\" x2=\"130\" y2=\"165\" stroke=\"#172033\" stroke-width=\"3\" /><path d=\"M130 90 L175 90 A50 50 0 0 1 175 190 L130 190 Z\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"225\" y1=\"140\" x2=\"285\" y2=\"140\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"60\" y=\"120\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"60\" y=\"170\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"300\" y=\"146\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">Q</text><line x1=\"390\" y1=\"75\" x2=\"585\" y2=\"75\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"117\" x2=\"585\" y2=\"117\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"159\" x2=\"585\" y2=\"159\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"201\" x2=\"585\" y2=\"201\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"243\" x2=\"585\" y2=\"243\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"285\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"390\" y1=\"75\" x2=\"390\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"455\" y1=\"75\" x2=\"455\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"520\" y1=\"75\" x2=\"520\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"585\" y1=\"75\" x2=\"585\" y2=\"285\" stroke=\"#172033\" stroke-width=\"1\" /><text x=\"422.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">A</text><text x=\"487.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">B</text><text x=\"552.5\" y=\"103\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Q</text><text x=\"422.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"145\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"487.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"187\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"552.5\" y=\"229\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0</text><text x=\"422.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"487.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text><text x=\"552.5\" y=\"271\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">1</text></svg></div>",
      "concept": "SPE-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE192",
      "section": "23.13",
      "topic": "Relays",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A relay coil energizes but the controlled load remains off. What should be checked next?",
      "options": [
        "Increase coil voltage above its rating to force the contacts closed.",
        "Assume the load is good because the relay can be heard operating.",
        "Contact condition, contact supply and load-side circuit, not just coil continuity.",
        "Replace the coil because any load failure proves the coil is open."
      ],
      "answer": 2,
      "explanation": "Mechanical operation does not prove contact conductivity or downstream circuit integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE193",
      "section": "23.14",
      "topic": "Protection",
      "question": "A circuit breaker repeatedly trips after reset. What is the best maintenance response?",
      "options": [
        "Investigate the cause of overcurrent/fault rather than repeatedly resetting it.",
        "Hold the breaker closed to determine whether the load eventually stabilizes.",
        "Replace it with a higher-rated breaker to prevent nuisance trips.",
        "Bypass it temporarily if the equipment is operationally important."
      ],
      "answer": 0,
      "explanation": "Repeated tripping indicates a fault or overload that must be isolated according to approved procedures.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE194",
      "section": "23.14",
      "topic": "Protection",
      "question": "During troubleshooting, which answer is MOST accurate? A circuit breaker repeatedly trips after reset. What is the best maintenance response?",
      "options": [
        "Hold the breaker closed to determine whether the load eventually stabilizes.",
        "Replace it with a higher-rated breaker to prevent nuisance trips.",
        "Bypass it temporarily if the equipment is operationally important.",
        "Investigate the cause of overcurrent/fault rather than repeatedly resetting it."
      ],
      "answer": 3,
      "explanation": "Repeated tripping indicates a fault or overload that must be isolated according to approved procedures.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE195",
      "section": "23.14",
      "topic": "Protection",
      "question": "An AME E technician is evaluating the system. A circuit breaker repeatedly trips after reset. What is the best maintenance response?",
      "options": [
        "Replace it with a higher-rated breaker to prevent nuisance trips.",
        "Bypass it temporarily if the equipment is operationally important.",
        "Investigate the cause of overcurrent/fault rather than repeatedly resetting it.",
        "Hold the breaker closed to determine whether the load eventually stabilizes."
      ],
      "answer": 2,
      "explanation": "Repeated tripping indicates a fault or overload that must be isolated according to approved procedures.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE196",
      "section": "23.14",
      "topic": "Protection",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A circuit breaker repeatedly trips after reset. What is the best maintenance response?",
      "options": [
        "Bypass it temporarily if the equipment is operationally important.",
        "Investigate the cause of overcurrent/fault rather than repeatedly resetting it.",
        "Hold the breaker closed to determine whether the load eventually stabilizes.",
        "Replace it with a higher-rated breaker to prevent nuisance trips."
      ],
      "answer": 1,
      "explanation": "Repeated tripping indicates a fault or overload that must be isolated according to approved procedures.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE197",
      "section": "23.8",
      "topic": "Wiring",
      "question": "Why should wire splices generally not be concentrated at the same point in a bundle?",
      "options": [
        "Aligned splices improve cooling and are always preferred.",
        "Staggering is used only to change wire numbers.",
        "Splice position has no mechanical effect on a bundle.",
        "Staggering reduces bundle bulk, stiffness and localized stress/chafing risk."
      ],
      "answer": 3,
      "explanation": "Approved wiring practice typically staggers splices to avoid a large rigid section and improve installation integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C050",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE198",
      "section": "23.8",
      "topic": "Wiring",
      "question": "During troubleshooting, which answer is MOST accurate? Why should wire splices generally not be concentrated at the same point in a bundle?",
      "options": [
        "Staggering is used only to change wire numbers.",
        "Splice position has no mechanical effect on a bundle.",
        "Staggering reduces bundle bulk, stiffness and localized stress/chafing risk.",
        "Aligned splices improve cooling and are always preferred."
      ],
      "answer": 2,
      "explanation": "Approved wiring practice typically staggers splices to avoid a large rigid section and improve installation integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C050",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE199",
      "section": "23.8",
      "topic": "Wiring",
      "question": "An AME E technician is evaluating the system. Why should wire splices generally not be concentrated at the same point in a bundle?",
      "options": [
        "Splice position has no mechanical effect on a bundle.",
        "Staggering reduces bundle bulk, stiffness and localized stress/chafing risk.",
        "Aligned splices improve cooling and are always preferred.",
        "Staggering is used only to change wire numbers."
      ],
      "answer": 1,
      "explanation": "Approved wiring practice typically staggers splices to avoid a large rigid section and improve installation integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C050",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE200",
      "section": "23.8",
      "topic": "Wiring",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why should wire splices generally not be concentrated at the same point in a bundle?",
      "options": [
        "Staggering reduces bundle bulk, stiffness and localized stress/chafing risk.",
        "Aligned splices improve cooling and are always preferred.",
        "Staggering is used only to change wire numbers.",
        "Splice position has no mechanical effect on a bundle."
      ],
      "answer": 0,
      "explanation": "Approved wiring practice typically staggers splices to avoid a large rigid section and improve installation integrity.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C050",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE201",
      "section": "23.7",
      "topic": "Distribution",
      "question": "What is a bus tie used for in many aircraft electrical systems?",
      "options": [
        "To isolate every essential load from all power sources.",
        "To convert AC directly to DC without rectification.",
        "To connect normally separate buses under specified conditions for power transfer or redundancy.",
        "To permanently short all generators together without control."
      ],
      "answer": 2,
      "explanation": "Bus ties provide controlled interconnection between distribution sections.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C051",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE202",
      "section": "23.7",
      "topic": "Distribution",
      "question": "During troubleshooting, which answer is MOST accurate? What is a bus tie used for in many aircraft electrical systems?",
      "options": [
        "To convert AC directly to DC without rectification.",
        "To connect normally separate buses under specified conditions for power transfer or redundancy.",
        "To permanently short all generators together without control.",
        "To isolate every essential load from all power sources."
      ],
      "answer": 1,
      "explanation": "Bus ties provide controlled interconnection between distribution sections.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C051",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE203",
      "section": "23.7",
      "topic": "Distribution",
      "question": "An AME E technician is evaluating the system. What is a bus tie used for in many aircraft electrical systems?",
      "options": [
        "To connect normally separate buses under specified conditions for power transfer or redundancy.",
        "To permanently short all generators together without control.",
        "To isolate every essential load from all power sources.",
        "To convert AC directly to DC without rectification."
      ],
      "answer": 0,
      "explanation": "Bus ties provide controlled interconnection between distribution sections.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C051",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE204",
      "section": "23.7",
      "topic": "Distribution",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is a bus tie used for in many aircraft electrical systems?",
      "options": [
        "To permanently short all generators together without control.",
        "To isolate every essential load from all power sources.",
        "To convert AC directly to DC without rectification.",
        "To connect normally separate buses under specified conditions for power transfer or redundancy."
      ],
      "answer": 3,
      "explanation": "Bus ties provide controlled interconnection between distribution sections.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C051",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE205",
      "section": "23.3",
      "topic": "Batteries",
      "question": "Why is nickel-cadmium battery thermal runaway a concern?",
      "options": [
        "It is a mechanical vibration phenomenon unrelated to charging.",
        "Rising temperature can increase charging reaction/current and cause further heating if not controlled.",
        "Ni-Cd cells cannot heat during charging.",
        "Thermal runaway occurs only when the battery is completely discharged and disconnected."
      ],
      "answer": 1,
      "explanation": "Ni-Cd batteries require correct charging/temperature monitoring because heat and charge current can reinforce each other.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C052",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE206",
      "section": "23.3",
      "topic": "Batteries",
      "question": "During troubleshooting, which answer is MOST accurate? Why is nickel-cadmium battery thermal runaway a concern?",
      "options": [
        "Rising temperature can increase charging reaction/current and cause further heating if not controlled.",
        "Ni-Cd cells cannot heat during charging.",
        "Thermal runaway occurs only when the battery is completely discharged and disconnected.",
        "It is a mechanical vibration phenomenon unrelated to charging."
      ],
      "answer": 0,
      "explanation": "Ni-Cd batteries require correct charging/temperature monitoring because heat and charge current can reinforce each other.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C052",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE207",
      "section": "23.3",
      "topic": "Batteries",
      "question": "An AME E technician is evaluating the system. Why is nickel-cadmium battery thermal runaway a concern?",
      "options": [
        "Ni-Cd cells cannot heat during charging.",
        "Thermal runaway occurs only when the battery is completely discharged and disconnected.",
        "It is a mechanical vibration phenomenon unrelated to charging.",
        "Rising temperature can increase charging reaction/current and cause further heating if not controlled."
      ],
      "answer": 3,
      "explanation": "Ni-Cd batteries require correct charging/temperature monitoring because heat and charge current can reinforce each other.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C052",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE208",
      "section": "23.3",
      "topic": "Batteries",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is nickel-cadmium battery thermal runaway a concern?",
      "options": [
        "Thermal runaway occurs only when the battery is completely discharged and disconnected.",
        "It is a mechanical vibration phenomenon unrelated to charging.",
        "Rising temperature can increase charging reaction/current and cause further heating if not controlled.",
        "Ni-Cd cells cannot heat during charging."
      ],
      "answer": 2,
      "explanation": "Ni-Cd batteries require correct charging/temperature monitoring because heat and charge current can reinforce each other.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C052",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE209",
      "section": "23.2",
      "topic": "Sources",
      "question": "What is the main distinction between a generator and a battery as aircraft electrical sources?",
      "options": [
        "A generator converts mechanical energy to electrical energy; a battery converts stored chemical energy to electrical energy.",
        "Both store energy chemically but at different voltages.",
        "A battery produces AC while a generator produces only DC.",
        "A generator can supply power only when the aircraft is on the ground."
      ],
      "answer": 0,
      "explanation": "The energy conversion mechanisms are different even though both can feed aircraft buses.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Formula sheet – Ohm’s law and electrical power</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Formula sheet – Ohm’s law and electrical power\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"48\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OHM’S LAW / POWER RELATIONSHIPS</text><circle cx=\"220\" cy=\"165\" r=\"92\" fill=\"#f6f9fc\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"128\" y1=\"165\" x2=\"312\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"220\" y1=\"73\" x2=\"220\" y2=\"257\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"220\" y=\"125\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V</text><text x=\"173\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I</text><text x=\"267\" y=\"205\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R</text><text x=\"475\" y=\"95\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">V = I × R</text><text x=\"475\" y=\"135\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">I = V ÷ R</text><text x=\"475\" y=\"175\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R = V ÷ I</text><text x=\"475\" y=\"225\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = V × I</text><text x=\"475\" y=\"260\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">P = I²R = V²/R</text></svg></div>",
      "concept": "SPE-C053",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE210",
      "section": "23.2",
      "topic": "Sources",
      "question": "During troubleshooting, which answer is MOST accurate? What is the main distinction between a generator and a battery as aircraft electrical sources?",
      "options": [
        "Both store energy chemically but at different voltages.",
        "A battery produces AC while a generator produces only DC.",
        "A generator can supply power only when the aircraft is on the ground.",
        "A generator converts mechanical energy to electrical energy; a battery converts stored chemical energy to electrical energy."
      ],
      "answer": 3,
      "explanation": "The energy conversion mechanisms are different even though both can feed aircraft buses.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">AC waveform – peak, period and frequency</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"AC waveform – peak, period and frequency\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">SINUSOIDAL AC WAVEFORM</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><line x1=\"70\" y1=\"55\" x2=\"70\" y2=\"265\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"65\" x2=\"70\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><line x1=\"650\" y1=\"65\" x2=\"650\" y2=\"255\" stroke=\"#172033\" stroke-width=\"1\" stroke-dasharray='6,5'/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">One cycle = period T    •    f = 1/T</text><text x=\"95\" y=\"78\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">+VPEAK</text><text x=\"95\" y=\"250\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">−VPEAK</text><text x=\"360\" y=\"142\" font-family=\"Arial,sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">0 V reference</text></svg></div>",
      "concept": "SPE-C053",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE211",
      "section": "23.2",
      "topic": "Sources",
      "question": "An AME E technician is evaluating the system. What is the main distinction between a generator and a battery as aircraft electrical sources?",
      "options": [
        "A battery produces AC while a generator produces only DC.",
        "A generator can supply power only when the aircraft is on the ground.",
        "A generator converts mechanical energy to electrical energy; a battery converts stored chemical energy to electrical energy.",
        "Both store energy chemically but at different voltages."
      ],
      "answer": 2,
      "explanation": "The energy conversion mechanisms are different even though both can feed aircraft buses.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">RMS and peak voltage relationship</div>\n<svg viewBox=\"0 0 720 320\" role=\"img\" aria-label=\"RMS and peak voltage relationship\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"318\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"35\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">AC RMS RELATIONSHIP</text><line x1=\"55\" y1=\"160\" x2=\"665\" y2=\"160\" stroke=\"#172033\" stroke-width=\"2\" /><polyline points=\"70,160.0 74,156.5 78,153.1 82,149.6 86,146.2 90,142.8 94,139.4 98,136.1 102,132.8 106,129.6 110,126.4 114,123.3 118,120.3 122,117.3 126,114.4 130,111.6 134,108.9 138,106.3 142,103.7 146,101.3 150,99.0 154,96.8 158,94.8 162,92.8 166,91.0 170,89.3 174,87.8 178,86.3 182,85.1 186,83.9 190,82.9 194,82.1 198,81.4 202,80.8 206,80.4 210,80.1 214,80.0 218,80.0 222,80.2 226,80.6 230,81.1 234,81.7 238,82.5 242,83.4 246,84.5 250,85.7 254,87.0 258,88.5 262,90.1 266,91.9 270,93.8 274,95.8 278,97.9 282,100.2 286,102.5 290,105.0 294,107.6 298,110.2 302,113.0 306,115.8 310,118.8 314,121.8 318,124.8 322,128.0 326,131.2 330,134.5 334,137.8 338,141.1 342,144.5 346,147.9 350,151.4 354,154.8 358,158.3 362,161.7 366,165.2 370,168.6 374,172.1 378,175.5 382,178.9 386,182.2 390,185.5 394,188.8 398,192.0 402,195.2 406,198.2 410,201.2 414,204.2 418,207.0 422,209.8 426,212.4 430,215.0 434,217.5 438,219.8 442,222.1 446,224.2 450,226.2 454,228.1 458,229.9 462,231.5 466,233.0 470,234.3 474,235.5 478,236.6 482,237.5 486,238.3 490,238.9 494,239.4 498,239.8 502,240.0 506,240.0 510,239.9 514,239.6 518,239.2 522,238.6 526,237.9 530,237.1 534,236.1 538,234.9 542,233.7 546,232.2 550,230.7 554,229.0 558,227.2 562,225.2 566,223.2 570,221.0 574,218.7 578,216.3 582,213.7 586,211.1 590,208.4 594,205.6 598,202.7 602,199.7 606,196.7 610,193.6 614,190.4 618,187.2 622,183.9 626,180.6 630,177.2 634,173.8 638,170.4 642,166.9 646,163.5 650,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><line x1=\"70\" y1=\"103.4\" x2=\"650\" y2=\"103.4\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><line x1=\"70\" y1=\"216.6\" x2=\"650\" y2=\"216.6\" stroke=\"#172033\" stroke-width=\"2\" stroke-dasharray='8,5'/><text x=\"655\" y=\"108\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">+0.707 VPEAK</text><text x=\"655\" y=\"212\" font-family=\"Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"end\" fill=\"#172033\">−0.707 VPEAK</text><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">For a sine wave: VRMS ≈ 0.707 × VPEAK</text></svg></div>",
      "concept": "SPE-C053",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE212",
      "section": "23.2",
      "topic": "Sources",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the main distinction between a generator and a battery as aircraft electrical sources?",
      "options": [
        "A generator can supply power only when the aircraft is on the ground.",
        "A generator converts mechanical energy to electrical energy; a battery converts stored chemical energy to electrical energy.",
        "Both store energy chemically but at different voltages.",
        "A battery produces AC while a generator produces only DC."
      ],
      "answer": 1,
      "explanation": "The energy conversion mechanisms are different even though both can feed aircraft buses.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C053",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE213",
      "section": "1.1",
      "topic": "Safety",
      "question": "A defect report is being investigated. Before measuring resistance in an aircraft electrical circuit with an ohmmeter, what is the most important condition?",
      "options": [
        "Only the load must be disconnected; system power may remain on.",
        "The meter should first be placed in its highest current range.",
        "The circuit must be de-energized and stored energy safely discharged.",
        "The circuit should remain energized so the meter can compare source voltage."
      ],
      "answer": 2,
      "explanation": "Ohmmeters apply their own internal test source; using one on an energized circuit can damage the meter and create misleading results.",
      "visual": null,
      "concept": "SPE-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE214",
      "section": "1.1",
      "topic": "Safety",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? Before measuring resistance in an aircraft electrical circuit with an ohmmeter, what is the most important condition?",
      "options": [
        "The circuit must be de-energized and stored energy safely discharged.",
        "The circuit should remain energized so the meter can compare source voltage.",
        "Only the load must be disconnected; system power may remain on.",
        "The meter should first be placed in its highest current range."
      ],
      "answer": 0,
      "explanation": "Ohmmeters apply their own internal test source; using one on an energized circuit can damage the meter and create misleading results.",
      "visual": null,
      "concept": "SPE-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE215",
      "section": "1.1",
      "topic": "Safety",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. Before measuring resistance in an aircraft electrical circuit with an ohmmeter, what is the most important condition?",
      "options": [
        "The meter should first be placed in its highest current range.",
        "The circuit must be de-energized and stored energy safely discharged.",
        "The circuit should remain energized so the meter can compare source voltage.",
        "Only the load must be disconnected; system power may remain on."
      ],
      "answer": 1,
      "explanation": "Ohmmeters apply their own internal test source; using one on an energized circuit can damage the meter and create misleading results.",
      "visual": null,
      "concept": "SPE-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE216",
      "section": "1.1",
      "topic": "Safety",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. Before measuring resistance in an aircraft electrical circuit with an ohmmeter, what is the most important condition?",
      "options": [
        "The circuit should remain energized so the meter can compare source voltage.",
        "Only the load must be disconnected; system power may remain on.",
        "The meter should first be placed in its highest current range.",
        "The circuit must be de-energized and stored energy safely discharged."
      ],
      "answer": 3,
      "explanation": "Ohmmeters apply their own internal test source; using one on an energized circuit can damage the meter and create misleading results.",
      "visual": null,
      "concept": "SPE-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE217",
      "section": "1.9",
      "topic": "Sound",
      "question": "A defect report is being investigated. Two audio signals have the same frequency but different amplitudes. What property differs most directly?",
      "options": [
        "Their sound intensity or perceived loudness can differ.",
        "Their wavelength in the same medium must be different.",
        "Their propagation speed in the same medium must be different.",
        "Their fundamental frequency must be different."
      ],
      "answer": 0,
      "explanation": "Amplitude relates to signal magnitude; frequency determines pitch, while propagation speed is mainly set by the medium.",
      "visual": null,
      "concept": "SPE-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE218",
      "section": "1.9",
      "topic": "Sound",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? Two audio signals have the same frequency but different amplitudes. What property differs most directly?",
      "options": [
        "Their fundamental frequency must be different.",
        "Their sound intensity or perceived loudness can differ.",
        "Their wavelength in the same medium must be different.",
        "Their propagation speed in the same medium must be different."
      ],
      "answer": 1,
      "explanation": "Amplitude relates to signal magnitude; frequency determines pitch, while propagation speed is mainly set by the medium.",
      "visual": null,
      "concept": "SPE-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE219",
      "section": "1.9",
      "topic": "Sound",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. Two audio signals have the same frequency but different amplitudes. What property differs most directly?",
      "options": [
        "Their wavelength in the same medium must be different.",
        "Their propagation speed in the same medium must be different.",
        "Their fundamental frequency must be different.",
        "Their sound intensity or perceived loudness can differ."
      ],
      "answer": 3,
      "explanation": "Amplitude relates to signal magnitude; frequency determines pitch, while propagation speed is mainly set by the medium.",
      "visual": null,
      "concept": "SPE-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE220",
      "section": "1.9",
      "topic": "Sound",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. Two audio signals have the same frequency but different amplitudes. What property differs most directly?",
      "options": [
        "Their fundamental frequency must be different.",
        "Their sound intensity or perceived loudness can differ.",
        "Their wavelength in the same medium must be different.",
        "Their propagation speed in the same medium must be different."
      ],
      "answer": 1,
      "explanation": "Amplitude relates to signal magnitude; frequency determines pitch, while propagation speed is mainly set by the medium.",
      "visual": null,
      "concept": "SPE-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE221",
      "section": "1.10",
      "topic": "Light",
      "question": "A defect report is being investigated. When light passes from air into glass at an oblique angle, why does its path bend?",
      "options": [
        "The wavelength remains fixed and forces a direction change.",
        "Its propagation speed changes at the boundary, causing refraction.",
        "Its frequency changes while its speed remains constant.",
        "Reflection eliminates the refracted component."
      ],
      "answer": 1,
      "explanation": "Refraction occurs because wave speed and wavelength change between media while frequency remains continuous across the boundary.",
      "visual": null,
      "concept": "SPE-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE222",
      "section": "1.10",
      "topic": "Light",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? When light passes from air into glass at an oblique angle, why does its path bend?",
      "options": [
        "Its frequency changes while its speed remains constant.",
        "Reflection eliminates the refracted component.",
        "The wavelength remains fixed and forces a direction change.",
        "Its propagation speed changes at the boundary, causing refraction."
      ],
      "answer": 3,
      "explanation": "Refraction occurs because wave speed and wavelength change between media while frequency remains continuous across the boundary.",
      "visual": null,
      "concept": "SPE-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE223",
      "section": "1.10",
      "topic": "Light",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. When light passes from air into glass at an oblique angle, why does its path bend?",
      "options": [
        "The wavelength remains fixed and forces a direction change.",
        "Its propagation speed changes at the boundary, causing refraction.",
        "Its frequency changes while its speed remains constant.",
        "Reflection eliminates the refracted component."
      ],
      "answer": 1,
      "explanation": "Refraction occurs because wave speed and wavelength change between media while frequency remains continuous across the boundary.",
      "visual": null,
      "concept": "SPE-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE224",
      "section": "1.10",
      "topic": "Light",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. When light passes from air into glass at an oblique angle, why does its path bend?",
      "options": [
        "Reflection eliminates the refracted component.",
        "The wavelength remains fixed and forces a direction change.",
        "Its propagation speed changes at the boundary, causing refraction.",
        "Its frequency changes while its speed remains constant."
      ],
      "answer": 2,
      "explanation": "Refraction occurs because wave speed and wavelength change between media while frequency remains continuous across the boundary.",
      "visual": null,
      "concept": "SPE-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE225",
      "section": "1.11",
      "topic": "Wiring",
      "question": "A defect report is being investigated. A wire bundle is routed near a flight-control cable. Which installation is most acceptable?",
      "options": [
        "Allow light contact if the wire bundle is protected by standard insulation.",
        "Tie the electrical bundle directly to the control cable to prevent relative movement.",
        "Use extra slack so the bundle can move away during control operation.",
        "Maintain the specified separation and support so the bundle cannot contact the moving cable."
      ],
      "answer": 3,
      "explanation": "Aircraft wiring must be routed and supported to avoid chafing and interference with controls.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Series-resistor calculation</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Series-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V DC SERIES CIRCUIT</text><line x1=\"110\" y1=\"90\" x2=\"580\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"90\" x2=\"580\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"580\" y1=\"220\" x2=\"110\" y2=\"220\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"90\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"72\" y=\"151\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">24 V</text><line x1=\"93\" y1=\"125\" x2=\"127\" y2=\"125\" stroke=\"#172033\" stroke-width=\"4\" /><line x1=\"100\" y1=\"145\" x2=\"120\" y2=\"145\" stroke=\"#172033\" stroke-width=\"2\" /><rect x=\"175\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"220\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 4 Ω</text><rect x=\"345\" y=\"72\" width=\"90\" height=\"36\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><text x=\"390\" y=\"63\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 8 Ω</text><text x=\"360\" y=\"272\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Use the values shown. Assume ideal conductors and source.</text></svg></div>",
      "concept": "SPE-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE226",
      "section": "1.11",
      "topic": "Wiring",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A wire bundle is routed near a flight-control cable. Which installation is most acceptable?",
      "options": [
        "Use extra slack so the bundle can move away during control operation.",
        "Maintain the specified separation and support so the bundle cannot contact the moving cable.",
        "Allow light contact if the wire bundle is protected by standard insulation.",
        "Tie the electrical bundle directly to the control cable to prevent relative movement."
      ],
      "answer": 1,
      "explanation": "Aircraft wiring must be routed and supported to avoid chafing and interference with controls.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Parallel-resistor calculation</div>\n<svg viewBox=\"0 0 720 310\" role=\"img\" aria-label=\"Parallel-resistor calculation\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"308\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V DC PARALLEL NETWORK</text><line x1=\"100\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"240\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"620\" y1=\"80\" x2=\"620\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"65\" y=\"155\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">28 V</text><line x1=\"245\" y1=\"80\" x2=\"245\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"205\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"245\" y1=\"185\" x2=\"245\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"245\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R1 14 Ω</text><line x1=\"470\" y1=\"80\" x2=\"470\" y2=\"115\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"430\" y=\"115\" width=\"80\" height=\"70\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"470\" y1=\"185\" x2=\"470\" y2=\"240\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"470\" y=\"150\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">R2 28 Ω</text><text x=\"360\" y=\"282\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"500\" text-anchor=\"middle\" fill=\"#172033\">Each branch is connected directly across the source.</text></svg></div>",
      "concept": "SPE-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE227",
      "section": "1.11",
      "topic": "Wiring",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A wire bundle is routed near a flight-control cable. Which installation is most acceptable?",
      "options": [
        "Tie the electrical bundle directly to the control cable to prevent relative movement.",
        "Use extra slack so the bundle can move away during control operation.",
        "Maintain the specified separation and support so the bundle cannot contact the moving cable.",
        "Allow light contact if the wire bundle is protected by standard insulation."
      ],
      "answer": 2,
      "explanation": "Aircraft wiring must be routed and supported to avoid chafing and interference with controls.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Voltage-divider circuit</div>\n<svg viewBox=\"0 0 720 300\" role=\"img\" aria-label=\"Voltage-divider circuit\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"298\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">VOLTAGE DIVIDER</text><line x1=\"140\" y1=\"75\" x2=\"540\" y2=\"75\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"250\" x2=\"540\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><line x1=\"140\" y1=\"75\" x2=\"140\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"100\" y=\"165\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">12 V</text><line x1=\"420\" y1=\"75\" x2=\"420\" y2=\"105\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"105\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"160\" x2=\"420\" y2=\"170\" stroke=\"#172033\" stroke-width=\"3\" /><rect x=\"380\" y=\"170\" width=\"80\" height=\"55\" fill=\"#fff\" stroke=\"#172033\" stroke-width=\"3\"/><line x1=\"420\" y1=\"225\" x2=\"420\" y2=\"250\" stroke=\"#172033\" stroke-width=\"3\" /><text x=\"478\" y=\"138\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R1 = 2 kΩ</text><text x=\"478\" y=\"203\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">R2 = 4 kΩ</text><line x1=\"420\" y1=\"165\" x2=\"575\" y2=\"165\" stroke=\"#172033\" stroke-width=\"2\" /><text x=\"582\" y=\"171\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\" fill=\"#172033\">VOUT</text></svg></div>",
      "concept": "SPE-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE228",
      "section": "1.11",
      "topic": "Wiring",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A wire bundle is routed near a flight-control cable. Which installation is most acceptable?",
      "options": [
        "Maintain the specified separation and support so the bundle cannot contact the moving cable.",
        "Allow light contact if the wire bundle is protected by standard insulation.",
        "Tie the electrical bundle directly to the control cable to prevent relative movement.",
        "Use extra slack so the bundle can move away during control operation."
      ],
      "answer": 0,
      "explanation": "Aircraft wiring must be routed and supported to avoid chafing and interference with controls.",
      "visual": "<div class=\"visual-card visual-exam\"><div class=\"visual-label\">Oscilloscope trace</div>\n<svg viewBox=\"0 0 720 315\" role=\"img\" aria-label=\"Oscilloscope trace\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"718\" height=\"313\" rx=\"12\" fill=\"#fff\" stroke=\"#cfd9e6\"/>\n<text x=\"360\" y=\"30\" font-family=\"Arial,sans-serif\" font-size=\"21\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">OSCILLOSCOPE DISPLAY</text><line x1=\"80\" y1=\"55\" x2=\"80\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"150\" y1=\"55\" x2=\"150\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"220\" y1=\"55\" x2=\"220\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"290\" y1=\"55\" x2=\"290\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"360\" y1=\"55\" x2=\"360\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"430\" y1=\"55\" x2=\"430\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"500\" y1=\"55\" x2=\"500\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"570\" y1=\"55\" x2=\"570\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"640\" y1=\"55\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"55\" x2=\"640\" y2=\"55\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"97\" x2=\"640\" y2=\"97\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"139\" x2=\"640\" y2=\"139\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"181\" x2=\"640\" y2=\"181\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"223\" x2=\"640\" y2=\"223\" stroke=\"#172033\" stroke-width=\"1\" /><line x1=\"80\" y1=\"265\" x2=\"640\" y2=\"265\" stroke=\"#172033\" stroke-width=\"1\" /><polyline points=\"80,160.0 84,148.9 88,138.2 92,128.2 96,119.2 100,111.5 104,105.4 108,101.0 112,98.6 116,98.1 120,99.6 124,103.0 128,108.3 132,115.2 136,123.6 140,133.1 144,143.5 148,154.4 152,165.6 156,176.5 160,186.9 164,196.4 168,204.8 172,211.7 176,217.0 180,220.4 184,221.9 188,221.4 192,219.0 196,214.6 200,208.5 204,200.8 208,191.8 212,181.8 216,171.1 220,160.0 224,148.9 228,138.2 232,128.2 236,119.2 240,111.5 244,105.4 248,101.0 252,98.6 256,98.1 260,99.6 264,103.0 268,108.3 272,115.2 276,123.6 280,133.1 284,143.5 288,154.4 292,165.6 296,176.5 300,186.9 304,196.4 308,204.8 312,211.7 316,217.0 320,220.4 324,221.9 328,221.4 332,219.0 336,214.6 340,208.5 344,200.8 348,191.8 352,181.8 356,171.1 360,160.0 364,148.9 368,138.2 372,128.2 376,119.2 380,111.5 384,105.4 388,101.0 392,98.6 396,98.1 400,99.6 404,103.0 408,108.3 412,115.2 416,123.6 420,133.1 424,143.5 428,154.4 432,165.6 436,176.5 440,186.9 444,196.4 448,204.8 452,211.7 456,217.0 460,220.4 464,221.9 468,221.4 472,219.0 476,214.6 480,208.5 484,200.8 488,191.8 492,181.8 496,171.1 500,160.0 504,148.9 508,138.2 512,128.2 516,119.2 520,111.5 524,105.4 528,101.0 532,98.6 536,98.1 540,99.6 544,103.0 548,108.3 552,115.2 556,123.6 560,133.1 564,143.5 568,154.4 572,165.6 576,176.5 580,186.9 584,196.4 588,204.8 592,211.7 596,217.0 600,220.4 604,221.9 608,221.4 612,219.0 616,214.6 620,208.5 624,200.8 628,191.8 632,181.8 636,171.1 640,160.0\" fill=\"none\" stroke=\"#1769aa\" stroke-width=\"4\"/><text x=\"360\" y=\"292\" font-family=\"Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#172033\">Time base: 2 ms/div     Vertical: 5 V/div</text></svg></div>",
      "concept": "SPE-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE229",
      "section": "1.12",
      "topic": "Bonding",
      "question": "A defect report is being investigated. What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit.",
        "Increase the panel structural load capability."
      ],
      "answer": 1,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE230",
      "section": "1.12",
      "topic": "Bonding",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit."
      ],
      "answer": 2,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE231",
      "section": "1.12",
      "topic": "Bonding",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit.",
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow."
      ],
      "answer": 0,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE232",
      "section": "1.12",
      "topic": "Bonding",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. What is the principal purpose of a low-resistance bonding jumper across a movable aircraft panel?",
      "options": [
        "Increase the panel structural load capability.",
        "Isolate the panel electrically so induced currents cannot flow.",
        "Maintain electrical continuity between structures for static, fault-current and EMI control.",
        "Provide a dedicated signal-return conductor for every avionics circuit."
      ],
      "answer": 2,
      "explanation": "Bonding reduces potential differences between conductive structures and supports lightning/static/fault-current paths.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Electrical bonding jumper</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Electrical bonding jumper\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"80\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"370\" y=\"70\" width=\"170\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"125\" y=\"130\" font-size=\"18\">Panel A</text><text x=\"415\" y=\"130\" font-size=\"18\">Panel B</text><path d=\"M250 125 C290 80,330 170,370 125\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\"/><text x=\"255\" y=\"215\" font-size=\"17\">Bonding jumper</text></svg></div>",
      "concept": "SPE-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE233",
      "section": "1.12",
      "topic": "Shielding",
      "question": "A defect report is being investigated. A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor."
      ],
      "answer": 2,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE234",
      "section": "1.12",
      "topic": "Shielding",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor.",
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks."
      ],
      "answer": 0,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE235",
      "section": "1.12",
      "topic": "Shielding",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors.",
        "Carry the normal load current in parallel with the signal conductor."
      ],
      "answer": 2,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE236",
      "section": "1.12",
      "topic": "Shielding",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A shielded avionics cable is used for a low-level signal. What is the shield intended primarily to do?",
      "options": [
        "Carry the normal load current in parallel with the signal conductor.",
        "Increase the DC resistance of the signal path.",
        "Replace the need for aircraft bonding at equipment racks.",
        "Reduce coupling of unwanted electromagnetic interference into or out of the signal conductors."
      ],
      "answer": 3,
      "explanation": "A conductive shield intercepts electric-field interference and, when terminated correctly, helps control EMI.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Shielded-wire concept</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Shielded-wire concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"7\"/><rect x=\"70\" y=\"85\" width=\"460\" height=\"80\" rx=\"38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"470\" y1=\"165\" x2=\"470\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"445\" y1=\"210\" x2=\"495\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"452\" y1=\"218\" x2=\"488\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"65\" font-size=\"17\">Conductive shield around signal conductor</text><text x=\"395\" y=\"245\" font-size=\"15\">shield ground</text></svg></div>",
      "concept": "SPE-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE237",
      "section": "1.13",
      "topic": "Soldering",
      "question": "A defect report is being investigated. A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief."
      ],
      "answer": 0,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE238",
      "section": "1.13",
      "topic": "Soldering",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting."
      ],
      "answer": 2,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE239",
      "section": "1.13",
      "topic": "Soldering",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly.",
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint."
      ],
      "answer": 3,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "SPE240",
      "section": "1.13",
      "topic": "Soldering",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A soldered terminal appears dull, grainy and mechanically weak. Which defect is most likely?",
      "options": [
        "A joint with excessive conductor strain relief.",
        "A cold or poorly wetted solder joint.",
        "An intentionally high-resistance joint used for current limiting.",
        "A correctly formed eutectic joint that cooled rapidly."
      ],
      "answer": 1,
      "explanation": "Poor heating or movement during solidification can produce a cold joint with inadequate wetting and mechanical integrity.",
      "visual": null,
      "concept": "SPE-C007",
      "difficulty": "Transport Canada-style practice"
    }
  ],
  "AV": [
    {
      "id": "AV001",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It becomes half as long.",
        "It doubles.",
        "It remains unchanged.",
        "It becomes four times as long."
      ],
      "answer": 0,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV002",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "During troubleshooting, which answer is MOST accurate? The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It doubles.",
        "It remains unchanged.",
        "It becomes four times as long.",
        "It becomes half as long."
      ],
      "answer": 3,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV003",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "An AME E technician is evaluating the system. The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It remains unchanged.",
        "It becomes four times as long.",
        "It becomes half as long.",
        "It doubles."
      ],
      "answer": 2,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV004",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It becomes four times as long.",
        "It becomes half as long.",
        "It doubles.",
        "It remains unchanged."
      ],
      "answer": 1,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV005",
      "section": "24.2",
      "topic": "Antennas",
      "question": "A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low.",
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power."
      ],
      "answer": 3,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV006",
      "section": "24.2",
      "topic": "Antennas",
      "question": "During troubleshooting, which answer is MOST accurate? A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "A receiver squelch setting that is too low.",
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer."
      ],
      "answer": 2,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV007",
      "section": "24.2",
      "topic": "Antennas",
      "question": "An AME E technician is evaluating the system. A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low."
      ],
      "answer": 1,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV008",
      "section": "24.2",
      "topic": "Antennas",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low.",
        "Normal DC bonding resistance of the airframe."
      ],
      "answer": 0,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV009",
      "section": "24.2",
      "topic": "Antennas",
      "question": "Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It increases transmitter frequency automatically.",
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio."
      ],
      "answer": 2,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV010",
      "section": "24.2",
      "topic": "Antennas",
      "question": "During troubleshooting, which answer is MOST accurate? Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically."
      ],
      "answer": 1,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV011",
      "section": "24.2",
      "topic": "Antennas",
      "question": "An AME E technician is evaluating the system. Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically.",
        "It eliminates the need for coaxial shielding."
      ],
      "answer": 0,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV012",
      "section": "24.2",
      "topic": "Antennas",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically.",
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance."
      ],
      "answer": 3,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV013",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna."
      ],
      "answer": 1,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV014",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "During troubleshooting, which answer is MOST accurate? A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault."
      ],
      "answer": 0,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV015",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "An AME E technician is evaluating the system. A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance."
      ],
      "answer": 3,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV016",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting."
      ],
      "answer": 2,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV017",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation.",
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements."
      ],
      "answer": 0,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV018",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "During troubleshooting, which answer is MOST accurate? Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To convert HF modulation into VHF line-of-sight propagation.",
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range."
      ],
      "answer": 3,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV019",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "An AME E technician is evaluating the system. Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation."
      ],
      "answer": 2,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV020",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation.",
        "To generate the aircraft DC bus voltage."
      ],
      "answer": 1,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV021",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Turn left because the needle always shows the direction of station passage only.",
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course."
      ],
      "answer": 3,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV022",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "During troubleshooting, which answer is MOST accurate? The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only."
      ],
      "answer": 2,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV023",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "An AME E technician is evaluating the system. The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only.",
        "Maintain heading because CDI displacement represents altitude error."
      ],
      "answer": 1,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV024",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only.",
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction."
      ],
      "answer": 0,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV025",
      "section": "24.4",
      "topic": "DME",
      "question": "DME determines distance primarily by measuring what?",
      "options": [
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals."
      ],
      "answer": 2,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV026",
      "section": "24.4",
      "topic": "DME",
      "question": "During troubleshooting, which answer is MOST accurate? DME determines distance primarily by measuring what?",
      "options": [
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier."
      ],
      "answer": 1,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV027",
      "section": "24.4",
      "topic": "DME",
      "question": "An AME E technician is evaluating the system. DME determines distance primarily by measuring what?",
      "options": [
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only."
      ],
      "answer": 0,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV028",
      "section": "24.4",
      "topic": "DME",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. DME determines distance primarily by measuring what?",
      "options": [
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range."
      ],
      "answer": 3,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV029",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display.",
        "Distance to the station in nautical miles.",
        "Glideslope deviation."
      ],
      "answer": 1,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV030",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "During troubleshooting, which answer is MOST accurate? What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Direction to the selected NDB relative to the aircraft/reference display.",
        "Distance to the station in nautical miles.",
        "Glideslope deviation.",
        "Localizer course width."
      ],
      "answer": 0,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV031",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "An AME E technician is evaluating the system. What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Distance to the station in nautical miles.",
        "Glideslope deviation.",
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display."
      ],
      "answer": 3,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV032",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Glideslope deviation.",
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display.",
        "Distance to the station in nautical miles."
      ],
      "answer": 2,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV033",
      "section": "24.7",
      "topic": "RMI",
      "question": "The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Bearing to the tuned radio-navigation station, referenced to the compass card.",
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit.",
        "Radio-altimeter height."
      ],
      "answer": 0,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV034",
      "section": "24.7",
      "topic": "RMI",
      "question": "During troubleshooting, which answer is MOST accurate? The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit.",
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card."
      ],
      "answer": 3,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV035",
      "section": "24.7",
      "topic": "RMI",
      "question": "An AME E technician is evaluating the system. The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Selected autopilot bank limit.",
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card.",
        "Aircraft pitch attitude."
      ],
      "answer": 2,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV036",
      "section": "24.7",
      "topic": "RMI",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card.",
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit."
      ],
      "answer": 1,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV037",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy."
      ],
      "answer": 3,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV038",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "During troubleshooting, which answer is MOST accurate? Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level."
      ],
      "answer": 2,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV039",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "An AME E technician is evaluating the system. Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only."
      ],
      "answer": 1,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV040",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential."
      ],
      "answer": 0,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV041",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "VOR OBS resolver alignment.",
        "Battery electrolyte level.",
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only."
      ],
      "answer": 2,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV042",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "During troubleshooting, which answer is MOST accurate? A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Battery electrolyte level.",
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only.",
        "VOR OBS resolver alignment."
      ],
      "answer": 1,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV043",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "An AME E technician is evaluating the system. A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only.",
        "VOR OBS resolver alignment.",
        "Battery electrolyte level."
      ],
      "answer": 0,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV044",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Pitot heat current only.",
        "VOR OBS resolver alignment.",
        "Battery electrolyte level.",
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path."
      ],
      "answer": 3,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV045",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "The weather-radar return shown becomes stronger as precipitation reflectivity increases. What does stronger returned energy generally represent?",
      "options": [
        "Terrain altitude measured by static pressure.",
        "Greater radar reflectivity, often associated with more intense precipitation.",
        "Lower transmitter frequency only.",
        "A reduction in antenna gain to zero."
      ],
      "answer": 1,
      "explanation": "Weather radar estimates precipitation intensity from the strength of RF energy reflected back from hydrometeors.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Weather-radar beam concept</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Weather-radar beam concept\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M125 120 L520 55 L520 215 L125 150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"485\" cy=\"135\" rx=\"40\" ry=\"62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"205\" font-size=\"16\">antenna</text><text x=\"415\" y=\"235\" font-size=\"16\">precipitation target</text></svg></div>",
      "concept": "AV-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV046",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "During troubleshooting, which answer is MOST accurate? The weather-radar return shown becomes stronger as precipitation reflectivity increases. What does stronger returned energy generally represent?",
      "options": [
        "Greater radar reflectivity, often associated with more intense precipitation.",
        "Lower transmitter frequency only.",
        "A reduction in antenna gain to zero.",
        "Terrain altitude measured by static pressure."
      ],
      "answer": 0,
      "explanation": "Weather radar estimates precipitation intensity from the strength of RF energy reflected back from hydrometeors.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Weather-radar beam concept</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Weather-radar beam concept\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M125 120 L520 55 L520 215 L125 150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"485\" cy=\"135\" rx=\"40\" ry=\"62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"205\" font-size=\"16\">antenna</text><text x=\"415\" y=\"235\" font-size=\"16\">precipitation target</text></svg></div>",
      "concept": "AV-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV047",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "An AME E technician is evaluating the system. The weather-radar return shown becomes stronger as precipitation reflectivity increases. What does stronger returned energy generally represent?",
      "options": [
        "Lower transmitter frequency only.",
        "A reduction in antenna gain to zero.",
        "Terrain altitude measured by static pressure.",
        "Greater radar reflectivity, often associated with more intense precipitation."
      ],
      "answer": 3,
      "explanation": "Weather radar estimates precipitation intensity from the strength of RF energy reflected back from hydrometeors.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Weather-radar beam concept</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Weather-radar beam concept\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M125 120 L520 55 L520 215 L125 150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"485\" cy=\"135\" rx=\"40\" ry=\"62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"205\" font-size=\"16\">antenna</text><text x=\"415\" y=\"235\" font-size=\"16\">precipitation target</text></svg></div>",
      "concept": "AV-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV048",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The weather-radar return shown becomes stronger as precipitation reflectivity increases. What does stronger returned energy generally represent?",
      "options": [
        "A reduction in antenna gain to zero.",
        "Terrain altitude measured by static pressure.",
        "Greater radar reflectivity, often associated with more intense precipitation.",
        "Lower transmitter frequency only."
      ],
      "answer": 2,
      "explanation": "Weather radar estimates precipitation intensity from the strength of RF energy reflected back from hydrometeors.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Weather-radar beam concept</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Weather-radar beam concept\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M125 120 L520 55 L520 215 L125 150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"485\" cy=\"135\" rx=\"40\" ry=\"62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"205\" font-size=\"16\">antenna</text><text x=\"415\" y=\"235\" font-size=\"16\">precipitation target</text></svg></div>",
      "concept": "AV-C012",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV049",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "Why should a technician avoid interpreting a completely black radar area behind a strong cell as necessarily clear weather?",
      "options": [
        "Strong attenuation can create a radar shadow where little energy reaches or returns from beyond the cell.",
        "Black always means no precipitation is present.",
        "Radar automatically suppresses all returns behind light rain only.",
        "The display cannot show attenuation effects."
      ],
      "answer": 0,
      "explanation": "Heavy precipitation may absorb/scatter so much energy that areas beyond it appear deceptively blank.",
      "visual": null,
      "concept": "AV-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV050",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "During troubleshooting, which answer is MOST accurate? Why should a technician avoid interpreting a completely black radar area behind a strong cell as necessarily clear weather?",
      "options": [
        "Black always means no precipitation is present.",
        "Radar automatically suppresses all returns behind light rain only.",
        "The display cannot show attenuation effects.",
        "Strong attenuation can create a radar shadow where little energy reaches or returns from beyond the cell."
      ],
      "answer": 3,
      "explanation": "Heavy precipitation may absorb/scatter so much energy that areas beyond it appear deceptively blank.",
      "visual": null,
      "concept": "AV-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV051",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "An AME E technician is evaluating the system. Why should a technician avoid interpreting a completely black radar area behind a strong cell as necessarily clear weather?",
      "options": [
        "Radar automatically suppresses all returns behind light rain only.",
        "The display cannot show attenuation effects.",
        "Strong attenuation can create a radar shadow where little energy reaches or returns from beyond the cell.",
        "Black always means no precipitation is present."
      ],
      "answer": 2,
      "explanation": "Heavy precipitation may absorb/scatter so much energy that areas beyond it appear deceptively blank.",
      "visual": null,
      "concept": "AV-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV052",
      "section": "24.6",
      "topic": "Weather Radar",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why should a technician avoid interpreting a completely black radar area behind a strong cell as necessarily clear weather?",
      "options": [
        "The display cannot show attenuation effects.",
        "Strong attenuation can create a radar shadow where little energy reaches or returns from beyond the cell.",
        "Black always means no precipitation is present.",
        "Radar automatically suppresses all returns behind light rain only."
      ],
      "answer": 1,
      "explanation": "Heavy precipitation may absorb/scatter so much energy that areas beyond it appear deceptively blank.",
      "visual": null,
      "concept": "AV-C013",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV053",
      "section": "24.8",
      "topic": "GPWS",
      "question": "A GPWS nuisance warning occurs repeatedly at the same location despite normal radio-altimeter operation. What should be considered?",
      "options": [
        "Replace the radio altimeter immediately because GPWS warnings can only originate there.",
        "Disable GPWS audio because nuisance warnings are not maintenance concerns.",
        "Adjust radio altitude until the warning disappears.",
        "System mode logic, configuration and terrain/flight-path conditions before assuming the radio altimeter has failed."
      ],
      "answer": 3,
      "explanation": "GPWS uses multiple inputs and mode logic; troubleshooting must consider inputs, configuration and actual flight conditions.",
      "visual": null,
      "concept": "AV-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV054",
      "section": "24.8",
      "topic": "GPWS",
      "question": "During troubleshooting, which answer is MOST accurate? A GPWS nuisance warning occurs repeatedly at the same location despite normal radio-altimeter operation. What should be considered?",
      "options": [
        "Disable GPWS audio because nuisance warnings are not maintenance concerns.",
        "Adjust radio altitude until the warning disappears.",
        "System mode logic, configuration and terrain/flight-path conditions before assuming the radio altimeter has failed.",
        "Replace the radio altimeter immediately because GPWS warnings can only originate there."
      ],
      "answer": 2,
      "explanation": "GPWS uses multiple inputs and mode logic; troubleshooting must consider inputs, configuration and actual flight conditions.",
      "visual": null,
      "concept": "AV-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV055",
      "section": "24.8",
      "topic": "GPWS",
      "question": "An AME E technician is evaluating the system. A GPWS nuisance warning occurs repeatedly at the same location despite normal radio-altimeter operation. What should be considered?",
      "options": [
        "Adjust radio altitude until the warning disappears.",
        "System mode logic, configuration and terrain/flight-path conditions before assuming the radio altimeter has failed.",
        "Replace the radio altimeter immediately because GPWS warnings can only originate there.",
        "Disable GPWS audio because nuisance warnings are not maintenance concerns."
      ],
      "answer": 1,
      "explanation": "GPWS uses multiple inputs and mode logic; troubleshooting must consider inputs, configuration and actual flight conditions.",
      "visual": null,
      "concept": "AV-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV056",
      "section": "24.8",
      "topic": "GPWS",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A GPWS nuisance warning occurs repeatedly at the same location despite normal radio-altimeter operation. What should be considered?",
      "options": [
        "System mode logic, configuration and terrain/flight-path conditions before assuming the radio altimeter has failed.",
        "Replace the radio altimeter immediately because GPWS warnings can only originate there.",
        "Disable GPWS audio because nuisance warnings are not maintenance concerns.",
        "Adjust radio altitude until the warning disappears."
      ],
      "answer": 0,
      "explanation": "GPWS uses multiple inputs and mode logic; troubleshooting must consider inputs, configuration and actual flight conditions.",
      "visual": null,
      "concept": "AV-C014",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV057",
      "section": "24.9",
      "topic": "Compass",
      "question": "A flux-valve/remote compass system shows correct heading with electrical loads off but changes when a high-current windshield heater is energized. What is most likely?",
      "options": [
        "A VOR station bearing error.",
        "Radio-altimeter antenna coupling.",
        "Magnetic/electrical interference or bonding/routing issues associated with the high-current circuit.",
        "Normal magnetic variation caused by aircraft speed."
      ],
      "answer": 2,
      "explanation": "Heading changes correlated with a specific electrical load suggest local magnetic fields, return paths, shielding or bonding effects.",
      "visual": null,
      "concept": "AV-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV058",
      "section": "24.9",
      "topic": "Compass",
      "question": "During troubleshooting, which answer is MOST accurate? A flux-valve/remote compass system shows correct heading with electrical loads off but changes when a high-current windshield heater is energized. What is most likely?",
      "options": [
        "Radio-altimeter antenna coupling.",
        "Magnetic/electrical interference or bonding/routing issues associated with the high-current circuit.",
        "Normal magnetic variation caused by aircraft speed.",
        "A VOR station bearing error."
      ],
      "answer": 1,
      "explanation": "Heading changes correlated with a specific electrical load suggest local magnetic fields, return paths, shielding or bonding effects.",
      "visual": null,
      "concept": "AV-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV059",
      "section": "24.9",
      "topic": "Compass",
      "question": "An AME E technician is evaluating the system. A flux-valve/remote compass system shows correct heading with electrical loads off but changes when a high-current windshield heater is energized. What is most likely?",
      "options": [
        "Magnetic/electrical interference or bonding/routing issues associated with the high-current circuit.",
        "Normal magnetic variation caused by aircraft speed.",
        "A VOR station bearing error.",
        "Radio-altimeter antenna coupling."
      ],
      "answer": 0,
      "explanation": "Heading changes correlated with a specific electrical load suggest local magnetic fields, return paths, shielding or bonding effects.",
      "visual": null,
      "concept": "AV-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV060",
      "section": "24.9",
      "topic": "Compass",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A flux-valve/remote compass system shows correct heading with electrical loads off but changes when a high-current windshield heater is energized. What is most likely?",
      "options": [
        "Normal magnetic variation caused by aircraft speed.",
        "A VOR station bearing error.",
        "Radio-altimeter antenna coupling.",
        "Magnetic/electrical interference or bonding/routing issues associated with the high-current circuit."
      ],
      "answer": 3,
      "explanation": "Heading changes correlated with a specific electrical load suggest local magnetic fields, return paths, shielding or bonding effects.",
      "visual": null,
      "concept": "AV-C015",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV061",
      "section": "24.10",
      "topic": "TCAS",
      "question": "TCAS traffic information fundamentally depends on what source?",
      "options": [
        "Radio-altimeter ground returns.",
        "Replies/data from nearby aircraft transponders processed by the TCAS computer.",
        "Weather-radar precipitation echoes.",
        "VOR radials only."
      ],
      "answer": 1,
      "explanation": "TCAS interrogates/receives compatible transponder information to determine relative traffic position and threat.",
      "visual": null,
      "concept": "AV-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV062",
      "section": "24.10",
      "topic": "TCAS",
      "question": "During troubleshooting, which answer is MOST accurate? TCAS traffic information fundamentally depends on what source?",
      "options": [
        "Replies/data from nearby aircraft transponders processed by the TCAS computer.",
        "Weather-radar precipitation echoes.",
        "VOR radials only.",
        "Radio-altimeter ground returns."
      ],
      "answer": 0,
      "explanation": "TCAS interrogates/receives compatible transponder information to determine relative traffic position and threat.",
      "visual": null,
      "concept": "AV-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV063",
      "section": "24.10",
      "topic": "TCAS",
      "question": "An AME E technician is evaluating the system. TCAS traffic information fundamentally depends on what source?",
      "options": [
        "Weather-radar precipitation echoes.",
        "VOR radials only.",
        "Radio-altimeter ground returns.",
        "Replies/data from nearby aircraft transponders processed by the TCAS computer."
      ],
      "answer": 3,
      "explanation": "TCAS interrogates/receives compatible transponder information to determine relative traffic position and threat.",
      "visual": null,
      "concept": "AV-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV064",
      "section": "24.10",
      "topic": "TCAS",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. TCAS traffic information fundamentally depends on what source?",
      "options": [
        "VOR radials only.",
        "Radio-altimeter ground returns.",
        "Replies/data from nearby aircraft transponders processed by the TCAS computer.",
        "Weather-radar precipitation echoes."
      ],
      "answer": 2,
      "explanation": "TCAS interrogates/receives compatible transponder information to determine relative traffic position and threat.",
      "visual": null,
      "concept": "AV-C016",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV065",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "In the simplified feedback loop, why is aircraft-response feedback returned to the autopilot computer?",
      "options": [
        "So commanded and actual motion/attitude can be compared and servo command corrected.",
        "To provide electrical generation for the servo.",
        "To prevent sensors from influencing the computer.",
        "To make the servo operate open-loop at all times."
      ],
      "answer": 0,
      "explanation": "Closed-loop feedback allows the controller to reduce error between desired and sensed aircraft state.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified autopilot feedback loop</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified autopilot feedback loop\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"61\" y=\"130\" font-size=\"16\">Sensors</text><rect x=\"245\" y=\"90\" width=\"130\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"270\" y=\"130\" font-size=\"16\">Computer</text><rect x=\"465\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"130\" font-size=\"16\">Servo</text><line x1=\"155\" y1=\"125\" x2=\"245\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"245,125 228,117 228,133\" fill=\"currentColor\"/><line x1=\"375\" y1=\"125\" x2=\"465\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"465,125 448,117 448,133\" fill=\"currentColor\"/><path d=\"M525 160 C525 225 95 225 95 160\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"95,160 88,177 103,177\" fill=\"currentColor\"/><text x=\"230\" y=\"235\" font-size=\"15\">aircraft-response feedback</text></svg></div>",
      "concept": "AV-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV066",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "During troubleshooting, which answer is MOST accurate? In the simplified feedback loop, why is aircraft-response feedback returned to the autopilot computer?",
      "options": [
        "To provide electrical generation for the servo.",
        "To prevent sensors from influencing the computer.",
        "To make the servo operate open-loop at all times.",
        "So commanded and actual motion/attitude can be compared and servo command corrected."
      ],
      "answer": 3,
      "explanation": "Closed-loop feedback allows the controller to reduce error between desired and sensed aircraft state.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified autopilot feedback loop</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified autopilot feedback loop\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"61\" y=\"130\" font-size=\"16\">Sensors</text><rect x=\"245\" y=\"90\" width=\"130\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"270\" y=\"130\" font-size=\"16\">Computer</text><rect x=\"465\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"130\" font-size=\"16\">Servo</text><line x1=\"155\" y1=\"125\" x2=\"245\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"245,125 228,117 228,133\" fill=\"currentColor\"/><line x1=\"375\" y1=\"125\" x2=\"465\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"465,125 448,117 448,133\" fill=\"currentColor\"/><path d=\"M525 160 C525 225 95 225 95 160\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"95,160 88,177 103,177\" fill=\"currentColor\"/><text x=\"230\" y=\"235\" font-size=\"15\">aircraft-response feedback</text></svg></div>",
      "concept": "AV-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV067",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "An AME E technician is evaluating the system. In the simplified feedback loop, why is aircraft-response feedback returned to the autopilot computer?",
      "options": [
        "To prevent sensors from influencing the computer.",
        "To make the servo operate open-loop at all times.",
        "So commanded and actual motion/attitude can be compared and servo command corrected.",
        "To provide electrical generation for the servo."
      ],
      "answer": 2,
      "explanation": "Closed-loop feedback allows the controller to reduce error between desired and sensed aircraft state.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified autopilot feedback loop</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified autopilot feedback loop\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"61\" y=\"130\" font-size=\"16\">Sensors</text><rect x=\"245\" y=\"90\" width=\"130\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"270\" y=\"130\" font-size=\"16\">Computer</text><rect x=\"465\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"130\" font-size=\"16\">Servo</text><line x1=\"155\" y1=\"125\" x2=\"245\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"245,125 228,117 228,133\" fill=\"currentColor\"/><line x1=\"375\" y1=\"125\" x2=\"465\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"465,125 448,117 448,133\" fill=\"currentColor\"/><path d=\"M525 160 C525 225 95 225 95 160\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"95,160 88,177 103,177\" fill=\"currentColor\"/><text x=\"230\" y=\"235\" font-size=\"15\">aircraft-response feedback</text></svg></div>",
      "concept": "AV-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV068",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. In the simplified feedback loop, why is aircraft-response feedback returned to the autopilot computer?",
      "options": [
        "To make the servo operate open-loop at all times.",
        "So commanded and actual motion/attitude can be compared and servo command corrected.",
        "To provide electrical generation for the servo.",
        "To prevent sensors from influencing the computer."
      ],
      "answer": 1,
      "explanation": "Closed-loop feedback allows the controller to reduce error between desired and sensed aircraft state.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified autopilot feedback loop</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified autopilot feedback loop\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"61\" y=\"130\" font-size=\"16\">Sensors</text><rect x=\"245\" y=\"90\" width=\"130\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"270\" y=\"130\" font-size=\"16\">Computer</text><rect x=\"465\" y=\"90\" width=\"120\" height=\"70\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"130\" font-size=\"16\">Servo</text><line x1=\"155\" y1=\"125\" x2=\"245\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"245,125 228,117 228,133\" fill=\"currentColor\"/><line x1=\"375\" y1=\"125\" x2=\"465\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"465,125 448,117 448,133\" fill=\"currentColor\"/><path d=\"M525 160 C525 225 95 225 95 160\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"95,160 88,177 103,177\" fill=\"currentColor\"/><text x=\"230\" y=\"235\" font-size=\"15\">aircraft-response feedback</text></svg></div>",
      "concept": "AV-C017",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV069",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "An autopilot pitch servo runs but the aircraft slowly departs selected altitude while trim continues to drive. What should be considered before replacing the computer?",
      "options": [
        "The computer must be defective because any altitude error originates in software.",
        "Disconnect the pitch sensor so the autopilot stops seeing the error.",
        "Increase servo clutch torque beyond limits.",
        "Pitch-servo authority/slippage, trim-system operation, sensor inputs and rigging should be checked systematically."
      ],
      "answer": 3,
      "explanation": "Autopilot performance depends on sensors, computer, servo/trim mechanics and rigging; multiple plausible faults can produce the same symptom.",
      "visual": null,
      "concept": "AV-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV070",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "During troubleshooting, which answer is MOST accurate? An autopilot pitch servo runs but the aircraft slowly departs selected altitude while trim continues to drive. What should be considered before replacing the computer?",
      "options": [
        "Disconnect the pitch sensor so the autopilot stops seeing the error.",
        "Increase servo clutch torque beyond limits.",
        "Pitch-servo authority/slippage, trim-system operation, sensor inputs and rigging should be checked systematically.",
        "The computer must be defective because any altitude error originates in software."
      ],
      "answer": 2,
      "explanation": "Autopilot performance depends on sensors, computer, servo/trim mechanics and rigging; multiple plausible faults can produce the same symptom.",
      "visual": null,
      "concept": "AV-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV071",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "An AME E technician is evaluating the system. An autopilot pitch servo runs but the aircraft slowly departs selected altitude while trim continues to drive. What should be considered before replacing the computer?",
      "options": [
        "Increase servo clutch torque beyond limits.",
        "Pitch-servo authority/slippage, trim-system operation, sensor inputs and rigging should be checked systematically.",
        "The computer must be defective because any altitude error originates in software.",
        "Disconnect the pitch sensor so the autopilot stops seeing the error."
      ],
      "answer": 1,
      "explanation": "Autopilot performance depends on sensors, computer, servo/trim mechanics and rigging; multiple plausible faults can produce the same symptom.",
      "visual": null,
      "concept": "AV-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV072",
      "section": "25.1",
      "topic": "Autopilot",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An autopilot pitch servo runs but the aircraft slowly departs selected altitude while trim continues to drive. What should be considered before replacing the computer?",
      "options": [
        "Pitch-servo authority/slippage, trim-system operation, sensor inputs and rigging should be checked systematically.",
        "The computer must be defective because any altitude error originates in software.",
        "Disconnect the pitch sensor so the autopilot stops seeing the error.",
        "Increase servo clutch torque beyond limits."
      ],
      "answer": 0,
      "explanation": "Autopilot performance depends on sensors, computer, servo/trim mechanics and rigging; multiple plausible faults can produce the same symptom.",
      "visual": null,
      "concept": "AV-C018",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV073",
      "section": "25.2",
      "topic": "FMS",
      "question": "What is a primary role of an FMS/FMC?",
      "options": [
        "Supply hydraulic pressure to autopilot servos.",
        "Measure radio altitude directly from terrain echoes.",
        "Integrate navigation, performance and flight-plan data to compute guidance and management functions.",
        "Act as the sole RF power amplifier for VHF communication."
      ],
      "answer": 2,
      "explanation": "The FMS combines databases, sensors and performance calculations to provide flight-management guidance.",
      "visual": null,
      "concept": "AV-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV074",
      "section": "25.2",
      "topic": "FMS",
      "question": "During troubleshooting, which answer is MOST accurate? What is a primary role of an FMS/FMC?",
      "options": [
        "Measure radio altitude directly from terrain echoes.",
        "Integrate navigation, performance and flight-plan data to compute guidance and management functions.",
        "Act as the sole RF power amplifier for VHF communication.",
        "Supply hydraulic pressure to autopilot servos."
      ],
      "answer": 1,
      "explanation": "The FMS combines databases, sensors and performance calculations to provide flight-management guidance.",
      "visual": null,
      "concept": "AV-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV075",
      "section": "25.2",
      "topic": "FMS",
      "question": "An AME E technician is evaluating the system. What is a primary role of an FMS/FMC?",
      "options": [
        "Integrate navigation, performance and flight-plan data to compute guidance and management functions.",
        "Act as the sole RF power amplifier for VHF communication.",
        "Supply hydraulic pressure to autopilot servos.",
        "Measure radio altitude directly from terrain echoes."
      ],
      "answer": 0,
      "explanation": "The FMS combines databases, sensors and performance calculations to provide flight-management guidance.",
      "visual": null,
      "concept": "AV-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV076",
      "section": "25.2",
      "topic": "FMS",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is a primary role of an FMS/FMC?",
      "options": [
        "Act as the sole RF power amplifier for VHF communication.",
        "Supply hydraulic pressure to autopilot servos.",
        "Measure radio altitude directly from terrain echoes.",
        "Integrate navigation, performance and flight-plan data to compute guidance and management functions."
      ],
      "answer": 3,
      "explanation": "The FMS combines databases, sensors and performance calculations to provide flight-management guidance.",
      "visual": null,
      "concept": "AV-C019",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV077",
      "section": "25.3",
      "topic": "Autothrottle",
      "question": "An autothrottle commands increased thrust but one engine thrust lever does not move. What is the best initial diagnostic split?",
      "options": [
        "Adjust both engine idle stops.",
        "Determine whether command/data is present and then distinguish servo/mechanical linkage fault from computer/input fault.",
        "Replace the engine fuel control immediately.",
        "Assume the thrust lever is intentionally inhibited because only one side is affected."
      ],
      "answer": 1,
      "explanation": "Troubleshooting should isolate command generation from actuator/linkage response.",
      "visual": null,
      "concept": "AV-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV078",
      "section": "25.3",
      "topic": "Autothrottle",
      "question": "During troubleshooting, which answer is MOST accurate? An autothrottle commands increased thrust but one engine thrust lever does not move. What is the best initial diagnostic split?",
      "options": [
        "Determine whether command/data is present and then distinguish servo/mechanical linkage fault from computer/input fault.",
        "Replace the engine fuel control immediately.",
        "Assume the thrust lever is intentionally inhibited because only one side is affected.",
        "Adjust both engine idle stops."
      ],
      "answer": 0,
      "explanation": "Troubleshooting should isolate command generation from actuator/linkage response.",
      "visual": null,
      "concept": "AV-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV079",
      "section": "25.3",
      "topic": "Autothrottle",
      "question": "An AME E technician is evaluating the system. An autothrottle commands increased thrust but one engine thrust lever does not move. What is the best initial diagnostic split?",
      "options": [
        "Replace the engine fuel control immediately.",
        "Assume the thrust lever is intentionally inhibited because only one side is affected.",
        "Adjust both engine idle stops.",
        "Determine whether command/data is present and then distinguish servo/mechanical linkage fault from computer/input fault."
      ],
      "answer": 3,
      "explanation": "Troubleshooting should isolate command generation from actuator/linkage response.",
      "visual": null,
      "concept": "AV-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV080",
      "section": "25.3",
      "topic": "Autothrottle",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An autothrottle commands increased thrust but one engine thrust lever does not move. What is the best initial diagnostic split?",
      "options": [
        "Assume the thrust lever is intentionally inhibited because only one side is affected.",
        "Adjust both engine idle stops.",
        "Determine whether command/data is present and then distinguish servo/mechanical linkage fault from computer/input fault.",
        "Replace the engine fuel control immediately."
      ],
      "answer": 2,
      "explanation": "Troubleshooting should isolate command generation from actuator/linkage response.",
      "visual": null,
      "concept": "AV-C020",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV081",
      "section": "25.4",
      "topic": "Autoland",
      "question": "Why are redundant sensors/computers commonly used in automatic landing systems?",
      "options": [
        "To maintain required integrity and permit fault monitoring/tolerance during a critical phase of flight.",
        "To increase VHF transmitter power.",
        "Because one computer cannot process digital data quickly enough for any landing.",
        "To eliminate the need for independent navigation signals."
      ],
      "answer": 0,
      "explanation": "Autoland requires high integrity and monitoring; redundancy supports fail-passive/fail-operational design objectives depending on system category.",
      "visual": null,
      "concept": "AV-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV082",
      "section": "25.4",
      "topic": "Autoland",
      "question": "During troubleshooting, which answer is MOST accurate? Why are redundant sensors/computers commonly used in automatic landing systems?",
      "options": [
        "To increase VHF transmitter power.",
        "Because one computer cannot process digital data quickly enough for any landing.",
        "To eliminate the need for independent navigation signals.",
        "To maintain required integrity and permit fault monitoring/tolerance during a critical phase of flight."
      ],
      "answer": 3,
      "explanation": "Autoland requires high integrity and monitoring; redundancy supports fail-passive/fail-operational design objectives depending on system category.",
      "visual": null,
      "concept": "AV-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV083",
      "section": "25.4",
      "topic": "Autoland",
      "question": "An AME E technician is evaluating the system. Why are redundant sensors/computers commonly used in automatic landing systems?",
      "options": [
        "Because one computer cannot process digital data quickly enough for any landing.",
        "To eliminate the need for independent navigation signals.",
        "To maintain required integrity and permit fault monitoring/tolerance during a critical phase of flight.",
        "To increase VHF transmitter power."
      ],
      "answer": 2,
      "explanation": "Autoland requires high integrity and monitoring; redundancy supports fail-passive/fail-operational design objectives depending on system category.",
      "visual": null,
      "concept": "AV-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV084",
      "section": "25.4",
      "topic": "Autoland",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why are redundant sensors/computers commonly used in automatic landing systems?",
      "options": [
        "To eliminate the need for independent navigation signals.",
        "To maintain required integrity and permit fault monitoring/tolerance during a critical phase of flight.",
        "To increase VHF transmitter power.",
        "Because one computer cannot process digital data quickly enough for any landing."
      ],
      "answer": 1,
      "explanation": "Autoland requires high integrity and monitoring; redundancy supports fail-passive/fail-operational design objectives depending on system category.",
      "visual": null,
      "concept": "AV-C021",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV085",
      "section": "25.5",
      "topic": "Mach Trim",
      "question": "What condition is a Mach trim system intended primarily to compensate for on applicable aircraft?",
      "options": [
        "Yaw from asymmetric wheel braking.",
        "Radio-altimeter errors over water.",
        "Battery voltage decay during engine start.",
        "Pitching-moment/stability changes associated with increasing Mach number."
      ],
      "answer": 3,
      "explanation": "Mach trim provides automatic pitch compensation for aerodynamic changes at high Mach.",
      "visual": null,
      "concept": "AV-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV086",
      "section": "25.5",
      "topic": "Mach Trim",
      "question": "During troubleshooting, which answer is MOST accurate? What condition is a Mach trim system intended primarily to compensate for on applicable aircraft?",
      "options": [
        "Radio-altimeter errors over water.",
        "Battery voltage decay during engine start.",
        "Pitching-moment/stability changes associated with increasing Mach number.",
        "Yaw from asymmetric wheel braking."
      ],
      "answer": 2,
      "explanation": "Mach trim provides automatic pitch compensation for aerodynamic changes at high Mach.",
      "visual": null,
      "concept": "AV-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV087",
      "section": "25.5",
      "topic": "Mach Trim",
      "question": "An AME E technician is evaluating the system. What condition is a Mach trim system intended primarily to compensate for on applicable aircraft?",
      "options": [
        "Battery voltage decay during engine start.",
        "Pitching-moment/stability changes associated with increasing Mach number.",
        "Yaw from asymmetric wheel braking.",
        "Radio-altimeter errors over water."
      ],
      "answer": 1,
      "explanation": "Mach trim provides automatic pitch compensation for aerodynamic changes at high Mach.",
      "visual": null,
      "concept": "AV-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV088",
      "section": "25.5",
      "topic": "Mach Trim",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What condition is a Mach trim system intended primarily to compensate for on applicable aircraft?",
      "options": [
        "Pitching-moment/stability changes associated with increasing Mach number.",
        "Yaw from asymmetric wheel braking.",
        "Radio-altimeter errors over water.",
        "Battery voltage decay during engine start."
      ],
      "answer": 0,
      "explanation": "Mach trim provides automatic pitch compensation for aerodynamic changes at high Mach.",
      "visual": null,
      "concept": "AV-C022",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV089",
      "section": "26.2",
      "topic": "DC Generation",
      "question": "A DC generator output is low with normal drive speed and the field circuit has excessive resistance. Why can output be reduced?",
      "options": [
        "Higher field resistance always increases generated voltage.",
        "The armature cannot produce voltage unless the battery is disconnected.",
        "Reduced field current weakens magnetic flux and therefore generated voltage.",
        "Field current affects only generator temperature, not output voltage."
      ],
      "answer": 2,
      "explanation": "Generator voltage depends strongly on field excitation and speed.",
      "visual": null,
      "concept": "AV-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV090",
      "section": "26.2",
      "topic": "DC Generation",
      "question": "During troubleshooting, which answer is MOST accurate? A DC generator output is low with normal drive speed and the field circuit has excessive resistance. Why can output be reduced?",
      "options": [
        "The armature cannot produce voltage unless the battery is disconnected.",
        "Reduced field current weakens magnetic flux and therefore generated voltage.",
        "Field current affects only generator temperature, not output voltage.",
        "Higher field resistance always increases generated voltage."
      ],
      "answer": 1,
      "explanation": "Generator voltage depends strongly on field excitation and speed.",
      "visual": null,
      "concept": "AV-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV091",
      "section": "26.2",
      "topic": "DC Generation",
      "question": "An AME E technician is evaluating the system. A DC generator output is low with normal drive speed and the field circuit has excessive resistance. Why can output be reduced?",
      "options": [
        "Reduced field current weakens magnetic flux and therefore generated voltage.",
        "Field current affects only generator temperature, not output voltage.",
        "Higher field resistance always increases generated voltage.",
        "The armature cannot produce voltage unless the battery is disconnected."
      ],
      "answer": 0,
      "explanation": "Generator voltage depends strongly on field excitation and speed.",
      "visual": null,
      "concept": "AV-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV092",
      "section": "26.2",
      "topic": "DC Generation",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A DC generator output is low with normal drive speed and the field circuit has excessive resistance. Why can output be reduced?",
      "options": [
        "Field current affects only generator temperature, not output voltage.",
        "Higher field resistance always increases generated voltage.",
        "The armature cannot produce voltage unless the battery is disconnected.",
        "Reduced field current weakens magnetic flux and therefore generated voltage."
      ],
      "answer": 3,
      "explanation": "Generator voltage depends strongly on field excitation and speed.",
      "visual": null,
      "concept": "AV-C023",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV093",
      "section": "26.3",
      "topic": "AC Generation",
      "question": "In a constant-frequency AC aircraft system, what must remain controlled to maintain frequency?",
      "options": [
        "Antenna wavelength.",
        "Generator rotational speed or an equivalent frequency-conversion process.",
        "Battery electrolyte temperature only.",
        "DC bus resistance."
      ],
      "answer": 1,
      "explanation": "AC frequency is tied to rotational speed and pole count unless power electronics convert it.",
      "visual": null,
      "concept": "AV-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV094",
      "section": "26.3",
      "topic": "AC Generation",
      "question": "During troubleshooting, which answer is MOST accurate? In a constant-frequency AC aircraft system, what must remain controlled to maintain frequency?",
      "options": [
        "Generator rotational speed or an equivalent frequency-conversion process.",
        "Battery electrolyte temperature only.",
        "DC bus resistance.",
        "Antenna wavelength."
      ],
      "answer": 0,
      "explanation": "AC frequency is tied to rotational speed and pole count unless power electronics convert it.",
      "visual": null,
      "concept": "AV-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV095",
      "section": "26.3",
      "topic": "AC Generation",
      "question": "An AME E technician is evaluating the system. In a constant-frequency AC aircraft system, what must remain controlled to maintain frequency?",
      "options": [
        "Battery electrolyte temperature only.",
        "DC bus resistance.",
        "Antenna wavelength.",
        "Generator rotational speed or an equivalent frequency-conversion process."
      ],
      "answer": 3,
      "explanation": "AC frequency is tied to rotational speed and pole count unless power electronics convert it.",
      "visual": null,
      "concept": "AV-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV096",
      "section": "26.3",
      "topic": "AC Generation",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. In a constant-frequency AC aircraft system, what must remain controlled to maintain frequency?",
      "options": [
        "DC bus resistance.",
        "Antenna wavelength.",
        "Generator rotational speed or an equivalent frequency-conversion process.",
        "Battery electrolyte temperature only."
      ],
      "answer": 2,
      "explanation": "AC frequency is tied to rotational speed and pole count unless power electronics convert it.",
      "visual": null,
      "concept": "AV-C024",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV097",
      "section": "26.4",
      "topic": "Batteries",
      "question": "A Ni-Cd battery shows abnormally high temperature during charging. What is the correct concern?",
      "options": [
        "Possible thermal runaway; charging and battery condition must be addressed per approved procedure.",
        "Normal full-charge indication that requires no action.",
        "Lead-acid sulfation.",
        "A VHF antenna mismatch."
      ],
      "answer": 0,
      "explanation": "Excessive Ni-Cd temperature can be part of a self-reinforcing charging/heat condition.",
      "visual": null,
      "concept": "AV-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV098",
      "section": "26.4",
      "topic": "Batteries",
      "question": "During troubleshooting, which answer is MOST accurate? A Ni-Cd battery shows abnormally high temperature during charging. What is the correct concern?",
      "options": [
        "Normal full-charge indication that requires no action.",
        "Lead-acid sulfation.",
        "A VHF antenna mismatch.",
        "Possible thermal runaway; charging and battery condition must be addressed per approved procedure."
      ],
      "answer": 3,
      "explanation": "Excessive Ni-Cd temperature can be part of a self-reinforcing charging/heat condition.",
      "visual": null,
      "concept": "AV-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV099",
      "section": "26.4",
      "topic": "Batteries",
      "question": "An AME E technician is evaluating the system. A Ni-Cd battery shows abnormally high temperature during charging. What is the correct concern?",
      "options": [
        "Lead-acid sulfation.",
        "A VHF antenna mismatch.",
        "Possible thermal runaway; charging and battery condition must be addressed per approved procedure.",
        "Normal full-charge indication that requires no action."
      ],
      "answer": 2,
      "explanation": "Excessive Ni-Cd temperature can be part of a self-reinforcing charging/heat condition.",
      "visual": null,
      "concept": "AV-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV100",
      "section": "26.4",
      "topic": "Batteries",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A Ni-Cd battery shows abnormally high temperature during charging. What is the correct concern?",
      "options": [
        "A VHF antenna mismatch.",
        "Possible thermal runaway; charging and battery condition must be addressed per approved procedure.",
        "Normal full-charge indication that requires no action.",
        "Lead-acid sulfation."
      ],
      "answer": 1,
      "explanation": "Excessive Ni-Cd temperature can be part of a self-reinforcing charging/heat condition.",
      "visual": null,
      "concept": "AV-C025",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV101",
      "section": "26.5",
      "topic": "Power Distribution",
      "question": "An essential bus loses its normal source but remains powered from an alternate source after automatic switching. What design objective is demonstrated?",
      "options": [
        "Permanent parallel operation of all generators.",
        "Elimination of circuit protection.",
        "Conversion of DC to RF energy.",
        "Electrical redundancy and fault isolation to maintain critical loads."
      ],
      "answer": 3,
      "explanation": "Critical distribution systems often provide alternate feeds while isolating failed sources/sections.",
      "visual": null,
      "concept": "AV-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV102",
      "section": "26.5",
      "topic": "Power Distribution",
      "question": "During troubleshooting, which answer is MOST accurate? An essential bus loses its normal source but remains powered from an alternate source after automatic switching. What design objective is demonstrated?",
      "options": [
        "Elimination of circuit protection.",
        "Conversion of DC to RF energy.",
        "Electrical redundancy and fault isolation to maintain critical loads.",
        "Permanent parallel operation of all generators."
      ],
      "answer": 2,
      "explanation": "Critical distribution systems often provide alternate feeds while isolating failed sources/sections.",
      "visual": null,
      "concept": "AV-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV103",
      "section": "26.5",
      "topic": "Power Distribution",
      "question": "An AME E technician is evaluating the system. An essential bus loses its normal source but remains powered from an alternate source after automatic switching. What design objective is demonstrated?",
      "options": [
        "Conversion of DC to RF energy.",
        "Electrical redundancy and fault isolation to maintain critical loads.",
        "Permanent parallel operation of all generators.",
        "Elimination of circuit protection."
      ],
      "answer": 1,
      "explanation": "Critical distribution systems often provide alternate feeds while isolating failed sources/sections.",
      "visual": null,
      "concept": "AV-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV104",
      "section": "26.5",
      "topic": "Power Distribution",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. An essential bus loses its normal source but remains powered from an alternate source after automatic switching. What design objective is demonstrated?",
      "options": [
        "Electrical redundancy and fault isolation to maintain critical loads.",
        "Permanent parallel operation of all generators.",
        "Elimination of circuit protection.",
        "Conversion of DC to RF energy."
      ],
      "answer": 0,
      "explanation": "Critical distribution systems often provide alternate feeds while isolating failed sources/sections.",
      "visual": null,
      "concept": "AV-C026",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV105",
      "section": "26.7",
      "topic": "Troubleshooting",
      "question": "A line-replaceable unit fails its BITE test only when installed in the aircraft but passes on the bench. What should be suspected before condemning the LRU again?",
      "options": [
        "Replace the LRU repeatedly until one passes in the aircraft.",
        "Increase bus voltage above the specified limit.",
        "Aircraft wiring, grounds, power quality, data buses, connectors and installation environment.",
        "The bench test proves the aircraft wiring cannot be involved."
      ],
      "answer": 2,
      "explanation": "A unit that passes independently may be reacting to installation/interface conditions rather than an internal fault.",
      "visual": null,
      "concept": "AV-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV106",
      "section": "26.7",
      "topic": "Troubleshooting",
      "question": "During troubleshooting, which answer is MOST accurate? A line-replaceable unit fails its BITE test only when installed in the aircraft but passes on the bench. What should be suspected before condemning the LRU again?",
      "options": [
        "Increase bus voltage above the specified limit.",
        "Aircraft wiring, grounds, power quality, data buses, connectors and installation environment.",
        "The bench test proves the aircraft wiring cannot be involved.",
        "Replace the LRU repeatedly until one passes in the aircraft."
      ],
      "answer": 1,
      "explanation": "A unit that passes independently may be reacting to installation/interface conditions rather than an internal fault.",
      "visual": null,
      "concept": "AV-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV107",
      "section": "26.7",
      "topic": "Troubleshooting",
      "question": "An AME E technician is evaluating the system. A line-replaceable unit fails its BITE test only when installed in the aircraft but passes on the bench. What should be suspected before condemning the LRU again?",
      "options": [
        "Aircraft wiring, grounds, power quality, data buses, connectors and installation environment.",
        "The bench test proves the aircraft wiring cannot be involved.",
        "Replace the LRU repeatedly until one passes in the aircraft.",
        "Increase bus voltage above the specified limit."
      ],
      "answer": 0,
      "explanation": "A unit that passes independently may be reacting to installation/interface conditions rather than an internal fault.",
      "visual": null,
      "concept": "AV-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV108",
      "section": "26.7",
      "topic": "Troubleshooting",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A line-replaceable unit fails its BITE test only when installed in the aircraft but passes on the bench. What should be suspected before condemning the LRU again?",
      "options": [
        "The bench test proves the aircraft wiring cannot be involved.",
        "Replace the LRU repeatedly until one passes in the aircraft.",
        "Increase bus voltage above the specified limit.",
        "Aircraft wiring, grounds, power quality, data buses, connectors and installation environment."
      ],
      "answer": 3,
      "explanation": "A unit that passes independently may be reacting to installation/interface conditions rather than an internal fault.",
      "visual": null,
      "concept": "AV-C027",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV109",
      "section": "26.8",
      "topic": "Wiring Diagrams",
      "question": "Two LRUs share a data bus. One unit is removed and the entire bus recovers. What does that suggest?",
      "options": [
        "The aircraft battery is overcharged.",
        "The removed LRU or its branch wiring may have been loading, shorting or corrupting the bus.",
        "The bus must be healthy because one unit removal cannot affect another.",
        "Both remaining LRUs are necessarily defective."
      ],
      "answer": 1,
      "explanation": "A single failed node or branch can disrupt a shared data bus depending on architecture.",
      "visual": null,
      "concept": "AV-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV110",
      "section": "26.8",
      "topic": "Wiring Diagrams",
      "question": "During troubleshooting, which answer is MOST accurate? Two LRUs share a data bus. One unit is removed and the entire bus recovers. What does that suggest?",
      "options": [
        "The removed LRU or its branch wiring may have been loading, shorting or corrupting the bus.",
        "The bus must be healthy because one unit removal cannot affect another.",
        "Both remaining LRUs are necessarily defective.",
        "The aircraft battery is overcharged."
      ],
      "answer": 0,
      "explanation": "A single failed node or branch can disrupt a shared data bus depending on architecture.",
      "visual": null,
      "concept": "AV-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV111",
      "section": "26.8",
      "topic": "Wiring Diagrams",
      "question": "An AME E technician is evaluating the system. Two LRUs share a data bus. One unit is removed and the entire bus recovers. What does that suggest?",
      "options": [
        "The bus must be healthy because one unit removal cannot affect another.",
        "Both remaining LRUs are necessarily defective.",
        "The aircraft battery is overcharged.",
        "The removed LRU or its branch wiring may have been loading, shorting or corrupting the bus."
      ],
      "answer": 3,
      "explanation": "A single failed node or branch can disrupt a shared data bus depending on architecture.",
      "visual": null,
      "concept": "AV-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV112",
      "section": "26.8",
      "topic": "Wiring Diagrams",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Two LRUs share a data bus. One unit is removed and the entire bus recovers. What does that suggest?",
      "options": [
        "Both remaining LRUs are necessarily defective.",
        "The aircraft battery is overcharged.",
        "The removed LRU or its branch wiring may have been loading, shorting or corrupting the bus.",
        "The bus must be healthy because one unit removal cannot affect another."
      ],
      "answer": 2,
      "explanation": "A single failed node or branch can disrupt a shared data bus depending on architecture.",
      "visual": null,
      "concept": "AV-C028",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV113",
      "section": "26.9",
      "topic": "Starter Generator",
      "question": "A starter-generator transitions from start to generate mode. What changes functionally?",
      "options": [
        "The machine changes from consuming electrical power as a motor to converting mechanical drive into electrical power.",
        "Its field circuit becomes permanently disconnected.",
        "It begins producing RF communication signals.",
        "It changes from DC to hydraulic power."
      ],
      "answer": 0,
      "explanation": "Starter-generators are reversible machines used in different operating modes.",
      "visual": null,
      "concept": "AV-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV114",
      "section": "26.9",
      "topic": "Starter Generator",
      "question": "During troubleshooting, which answer is MOST accurate? A starter-generator transitions from start to generate mode. What changes functionally?",
      "options": [
        "Its field circuit becomes permanently disconnected.",
        "It begins producing RF communication signals.",
        "It changes from DC to hydraulic power.",
        "The machine changes from consuming electrical power as a motor to converting mechanical drive into electrical power."
      ],
      "answer": 3,
      "explanation": "Starter-generators are reversible machines used in different operating modes.",
      "visual": null,
      "concept": "AV-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV115",
      "section": "26.9",
      "topic": "Starter Generator",
      "question": "An AME E technician is evaluating the system. A starter-generator transitions from start to generate mode. What changes functionally?",
      "options": [
        "It begins producing RF communication signals.",
        "It changes from DC to hydraulic power.",
        "The machine changes from consuming electrical power as a motor to converting mechanical drive into electrical power.",
        "Its field circuit becomes permanently disconnected."
      ],
      "answer": 2,
      "explanation": "Starter-generators are reversible machines used in different operating modes.",
      "visual": null,
      "concept": "AV-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV116",
      "section": "26.9",
      "topic": "Starter Generator",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A starter-generator transitions from start to generate mode. What changes functionally?",
      "options": [
        "It changes from DC to hydraulic power.",
        "The machine changes from consuming electrical power as a motor to converting mechanical drive into electrical power.",
        "Its field circuit becomes permanently disconnected.",
        "It begins producing RF communication signals."
      ],
      "answer": 1,
      "explanation": "Starter-generators are reversible machines used in different operating modes.",
      "visual": null,
      "concept": "AV-C029",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV117",
      "section": "27.1",
      "topic": "CVR",
      "question": "When performing a CVR operational test, why is correct microphone/channel capture important?",
      "options": [
        "CVR serviceability is proven by circuit-breaker position alone.",
        "Only cockpit-area microphone audio is ever recorded.",
        "Playback quality is unrelated to input wiring.",
        "The recorder must receive the required audio sources and channel information, not merely show power on."
      ],
      "answer": 3,
      "explanation": "Functional testing verifies the required sources are actually being recorded.",
      "visual": null,
      "concept": "AV-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV118",
      "section": "27.1",
      "topic": "CVR",
      "question": "During troubleshooting, which answer is MOST accurate? When performing a CVR operational test, why is correct microphone/channel capture important?",
      "options": [
        "Only cockpit-area microphone audio is ever recorded.",
        "Playback quality is unrelated to input wiring.",
        "The recorder must receive the required audio sources and channel information, not merely show power on.",
        "CVR serviceability is proven by circuit-breaker position alone."
      ],
      "answer": 2,
      "explanation": "Functional testing verifies the required sources are actually being recorded.",
      "visual": null,
      "concept": "AV-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV119",
      "section": "27.1",
      "topic": "CVR",
      "question": "An AME E technician is evaluating the system. When performing a CVR operational test, why is correct microphone/channel capture important?",
      "options": [
        "Playback quality is unrelated to input wiring.",
        "The recorder must receive the required audio sources and channel information, not merely show power on.",
        "CVR serviceability is proven by circuit-breaker position alone.",
        "Only cockpit-area microphone audio is ever recorded."
      ],
      "answer": 1,
      "explanation": "Functional testing verifies the required sources are actually being recorded.",
      "visual": null,
      "concept": "AV-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV120",
      "section": "27.1",
      "topic": "CVR",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. When performing a CVR operational test, why is correct microphone/channel capture important?",
      "options": [
        "The recorder must receive the required audio sources and channel information, not merely show power on.",
        "CVR serviceability is proven by circuit-breaker position alone.",
        "Only cockpit-area microphone audio is ever recorded.",
        "Playback quality is unrelated to input wiring."
      ],
      "answer": 0,
      "explanation": "Functional testing verifies the required sources are actually being recorded.",
      "visual": null,
      "concept": "AV-C030",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV121",
      "section": "27.2",
      "topic": "FDR",
      "question": "Why may an FDR fault require checking both the recorder and the data acquisition/interface system?",
      "options": [
        "FDR faults can only be caused by the crash-protected memory.",
        "Input data quality does not affect recorded values.",
        "Recorded parameters depend on upstream sensors/data acquisition as well as the recorder itself.",
        "The recorder generates all flight parameters internally."
      ],
      "answer": 2,
      "explanation": "An FDR is the end of a data chain; invalid/missing parameters may originate upstream.",
      "visual": null,
      "concept": "AV-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV122",
      "section": "27.2",
      "topic": "FDR",
      "question": "During troubleshooting, which answer is MOST accurate? Why may an FDR fault require checking both the recorder and the data acquisition/interface system?",
      "options": [
        "Input data quality does not affect recorded values.",
        "Recorded parameters depend on upstream sensors/data acquisition as well as the recorder itself.",
        "The recorder generates all flight parameters internally.",
        "FDR faults can only be caused by the crash-protected memory."
      ],
      "answer": 1,
      "explanation": "An FDR is the end of a data chain; invalid/missing parameters may originate upstream.",
      "visual": null,
      "concept": "AV-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV123",
      "section": "27.2",
      "topic": "FDR",
      "question": "An AME E technician is evaluating the system. Why may an FDR fault require checking both the recorder and the data acquisition/interface system?",
      "options": [
        "Recorded parameters depend on upstream sensors/data acquisition as well as the recorder itself.",
        "The recorder generates all flight parameters internally.",
        "FDR faults can only be caused by the crash-protected memory.",
        "Input data quality does not affect recorded values."
      ],
      "answer": 0,
      "explanation": "An FDR is the end of a data chain; invalid/missing parameters may originate upstream.",
      "visual": null,
      "concept": "AV-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV124",
      "section": "27.2",
      "topic": "FDR",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why may an FDR fault require checking both the recorder and the data acquisition/interface system?",
      "options": [
        "The recorder generates all flight parameters internally.",
        "FDR faults can only be caused by the crash-protected memory.",
        "Input data quality does not affect recorded values.",
        "Recorded parameters depend on upstream sensors/data acquisition as well as the recorder itself."
      ],
      "answer": 3,
      "explanation": "An FDR is the end of a data chain; invalid/missing parameters may originate upstream.",
      "visual": null,
      "concept": "AV-C031",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV125",
      "section": "27.3",
      "topic": "ELT",
      "question": "After an ELT antenna/coax replacement, what is important besides simple continuity?",
      "options": [
        "The ELT battery may be omitted during testing.",
        "Correct antenna/coax installation, bonding as applicable, connector integrity and an approved functional/test procedure.",
        "Continuity alone proves RF performance.",
        "The coax shield should be intentionally left open at both ends in all designs."
      ],
      "answer": 1,
      "explanation": "RF systems require impedance/installation integrity that a simple DC continuity check cannot fully verify.",
      "visual": null,
      "concept": "AV-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV126",
      "section": "27.3",
      "topic": "ELT",
      "question": "During troubleshooting, which answer is MOST accurate? After an ELT antenna/coax replacement, what is important besides simple continuity?",
      "options": [
        "Correct antenna/coax installation, bonding as applicable, connector integrity and an approved functional/test procedure.",
        "Continuity alone proves RF performance.",
        "The coax shield should be intentionally left open at both ends in all designs.",
        "The ELT battery may be omitted during testing."
      ],
      "answer": 0,
      "explanation": "RF systems require impedance/installation integrity that a simple DC continuity check cannot fully verify.",
      "visual": null,
      "concept": "AV-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV127",
      "section": "27.3",
      "topic": "ELT",
      "question": "An AME E technician is evaluating the system. After an ELT antenna/coax replacement, what is important besides simple continuity?",
      "options": [
        "Continuity alone proves RF performance.",
        "The coax shield should be intentionally left open at both ends in all designs.",
        "The ELT battery may be omitted during testing.",
        "Correct antenna/coax installation, bonding as applicable, connector integrity and an approved functional/test procedure."
      ],
      "answer": 3,
      "explanation": "RF systems require impedance/installation integrity that a simple DC continuity check cannot fully verify.",
      "visual": null,
      "concept": "AV-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV128",
      "section": "27.3",
      "topic": "ELT",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. After an ELT antenna/coax replacement, what is important besides simple continuity?",
      "options": [
        "The coax shield should be intentionally left open at both ends in all designs.",
        "The ELT battery may be omitted during testing.",
        "Correct antenna/coax installation, bonding as applicable, connector integrity and an approved functional/test procedure.",
        "Continuity alone proves RF performance."
      ],
      "answer": 2,
      "explanation": "RF systems require impedance/installation integrity that a simple DC continuity check cannot fully verify.",
      "visual": null,
      "concept": "AV-C032",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV129",
      "section": "27.4",
      "topic": "ULD",
      "question": "What is the primary function of an underwater location device associated with a recorder?",
      "options": [
        "Emit an acoustic signal after water activation to aid underwater location.",
        "Transmit VHF voice on 121.5 MHz continuously in flight.",
        "Measure radio altitude over water.",
        "Provide the recorder with primary electrical power."
      ],
      "answer": 0,
      "explanation": "The ULD/pinger emits an acoustic beacon when immersed to assist recovery.",
      "visual": null,
      "concept": "AV-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV130",
      "section": "27.4",
      "topic": "ULD",
      "question": "During troubleshooting, which answer is MOST accurate? What is the primary function of an underwater location device associated with a recorder?",
      "options": [
        "Transmit VHF voice on 121.5 MHz continuously in flight.",
        "Measure radio altitude over water.",
        "Provide the recorder with primary electrical power.",
        "Emit an acoustic signal after water activation to aid underwater location."
      ],
      "answer": 3,
      "explanation": "The ULD/pinger emits an acoustic beacon when immersed to assist recovery.",
      "visual": null,
      "concept": "AV-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV131",
      "section": "27.4",
      "topic": "ULD",
      "question": "An AME E technician is evaluating the system. What is the primary function of an underwater location device associated with a recorder?",
      "options": [
        "Measure radio altitude over water.",
        "Provide the recorder with primary electrical power.",
        "Emit an acoustic signal after water activation to aid underwater location.",
        "Transmit VHF voice on 121.5 MHz continuously in flight."
      ],
      "answer": 2,
      "explanation": "The ULD/pinger emits an acoustic beacon when immersed to assist recovery.",
      "visual": null,
      "concept": "AV-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV132",
      "section": "27.4",
      "topic": "ULD",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the primary function of an underwater location device associated with a recorder?",
      "options": [
        "Provide the recorder with primary electrical power.",
        "Emit an acoustic signal after water activation to aid underwater location.",
        "Transmit VHF voice on 121.5 MHz continuously in flight.",
        "Measure radio altitude over water."
      ],
      "answer": 1,
      "explanation": "The ULD/pinger emits an acoustic beacon when immersed to assist recovery.",
      "visual": null,
      "concept": "AV-C033",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV133",
      "section": "28.0",
      "topic": "Flight Instruments",
      "question": "A conventional airspeed indicator compares which pressures?",
      "options": [
        "Static pressure and cabin pressure only.",
        "Pitot pressure and fuel pressure.",
        "Differential hydraulic pressure and static pressure.",
        "Pitot (total) pressure and static pressure."
      ],
      "answer": 3,
      "explanation": "Dynamic pressure is derived from the difference between total and static pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV134",
      "section": "28.0",
      "topic": "Flight Instruments",
      "question": "During troubleshooting, which answer is MOST accurate? A conventional airspeed indicator compares which pressures?",
      "options": [
        "Pitot pressure and fuel pressure.",
        "Differential hydraulic pressure and static pressure.",
        "Pitot (total) pressure and static pressure.",
        "Static pressure and cabin pressure only."
      ],
      "answer": 2,
      "explanation": "Dynamic pressure is derived from the difference between total and static pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV135",
      "section": "28.0",
      "topic": "Flight Instruments",
      "question": "An AME E technician is evaluating the system. A conventional airspeed indicator compares which pressures?",
      "options": [
        "Differential hydraulic pressure and static pressure.",
        "Pitot (total) pressure and static pressure.",
        "Static pressure and cabin pressure only.",
        "Pitot pressure and fuel pressure."
      ],
      "answer": 1,
      "explanation": "Dynamic pressure is derived from the difference between total and static pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV136",
      "section": "28.0",
      "topic": "Flight Instruments",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A conventional airspeed indicator compares which pressures?",
      "options": [
        "Pitot (total) pressure and static pressure.",
        "Static pressure and cabin pressure only.",
        "Pitot pressure and fuel pressure.",
        "Differential hydraulic pressure and static pressure."
      ],
      "answer": 0,
      "explanation": "Dynamic pressure is derived from the difference between total and static pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Pitot-static instrument concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Pitot-static instrument concept\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"70\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"90\" y=\"110\" font-size=\"16\">Pitot</text><text x=\"88\" y=\"135\" font-size=\"16\">pressure</text><rect x=\"420\" y=\"70\" width=\"130\" height=\"100\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"438\" y=\"110\" font-size=\"16\">Static</text><text x=\"438\" y=\"135\" font-size=\"16\">pressure</text><circle cx=\"310\" cy=\"125\" r=\"72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"273\" y=\"120\" font-size=\"16\">Airspeed</text><text x=\"276\" y=\"145\" font-size=\"16\">indicator</text><line x1=\"200\" y1=\"120\" x2=\"238\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"382\" y1=\"120\" x2=\"420\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C034",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV137",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "The block diagram shows pitot/static and temperature inputs entering the ADC. Why are temperature inputs useful?",
      "options": [
        "Temperature is used only to control cabin heat.",
        "ADC output altitude is calculated from temperature alone.",
        "They permit calculation/correction of air-data parameters such as true airspeed and Mach-related values.",
        "Temperature replaces the need for any pressure inputs."
      ],
      "answer": 2,
      "explanation": "Air-data computation combines pressure and temperature information for several corrected/calculated parameters.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Air-data computer block diagram</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Air-data computer block diagram\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"55\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"92\" font-size=\"16\">Pitot/static</text><rect x=\"35\" y=\"150\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"68\" y=\"187\" font-size=\"16\">TAT/OAT</text><rect x=\"245\" y=\"90\" width=\"145\" height=\"85\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"278\" y=\"126\" font-size=\"16\">Air Data</text><text x=\"275\" y=\"150\" font-size=\"16\">Computer</text><rect x=\"470\" y=\"70\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"493\" y=\"101\" font-size=\"15\">Altitude</text><rect x=\"470\" y=\"145\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"176\" font-size=\"15\">Airspeed</text><line x1=\"165\" y1=\"85\" x2=\"245\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"165\" y1=\"180\" x2=\"245\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"115\" x2=\"470\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"150\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV138",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "During troubleshooting, which answer is MOST accurate? The block diagram shows pitot/static and temperature inputs entering the ADC. Why are temperature inputs useful?",
      "options": [
        "ADC output altitude is calculated from temperature alone.",
        "They permit calculation/correction of air-data parameters such as true airspeed and Mach-related values.",
        "Temperature replaces the need for any pressure inputs.",
        "Temperature is used only to control cabin heat."
      ],
      "answer": 1,
      "explanation": "Air-data computation combines pressure and temperature information for several corrected/calculated parameters.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Air-data computer block diagram</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Air-data computer block diagram\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"55\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"92\" font-size=\"16\">Pitot/static</text><rect x=\"35\" y=\"150\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"68\" y=\"187\" font-size=\"16\">TAT/OAT</text><rect x=\"245\" y=\"90\" width=\"145\" height=\"85\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"278\" y=\"126\" font-size=\"16\">Air Data</text><text x=\"275\" y=\"150\" font-size=\"16\">Computer</text><rect x=\"470\" y=\"70\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"493\" y=\"101\" font-size=\"15\">Altitude</text><rect x=\"470\" y=\"145\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"176\" font-size=\"15\">Airspeed</text><line x1=\"165\" y1=\"85\" x2=\"245\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"165\" y1=\"180\" x2=\"245\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"115\" x2=\"470\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"150\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV139",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "An AME E technician is evaluating the system. The block diagram shows pitot/static and temperature inputs entering the ADC. Why are temperature inputs useful?",
      "options": [
        "They permit calculation/correction of air-data parameters such as true airspeed and Mach-related values.",
        "Temperature replaces the need for any pressure inputs.",
        "Temperature is used only to control cabin heat.",
        "ADC output altitude is calculated from temperature alone."
      ],
      "answer": 0,
      "explanation": "Air-data computation combines pressure and temperature information for several corrected/calculated parameters.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Air-data computer block diagram</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Air-data computer block diagram\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"55\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"92\" font-size=\"16\">Pitot/static</text><rect x=\"35\" y=\"150\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"68\" y=\"187\" font-size=\"16\">TAT/OAT</text><rect x=\"245\" y=\"90\" width=\"145\" height=\"85\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"278\" y=\"126\" font-size=\"16\">Air Data</text><text x=\"275\" y=\"150\" font-size=\"16\">Computer</text><rect x=\"470\" y=\"70\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"493\" y=\"101\" font-size=\"15\">Altitude</text><rect x=\"470\" y=\"145\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"176\" font-size=\"15\">Airspeed</text><line x1=\"165\" y1=\"85\" x2=\"245\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"165\" y1=\"180\" x2=\"245\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"115\" x2=\"470\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"150\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV140",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. The block diagram shows pitot/static and temperature inputs entering the ADC. Why are temperature inputs useful?",
      "options": [
        "Temperature replaces the need for any pressure inputs.",
        "Temperature is used only to control cabin heat.",
        "ADC output altitude is calculated from temperature alone.",
        "They permit calculation/correction of air-data parameters such as true airspeed and Mach-related values."
      ],
      "answer": 3,
      "explanation": "Air-data computation combines pressure and temperature information for several corrected/calculated parameters.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Air-data computer block diagram</div><svg viewBox=\"0 0 620 250\" role=\"img\" aria-label=\"Air-data computer block diagram\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"55\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"60\" y=\"92\" font-size=\"16\">Pitot/static</text><rect x=\"35\" y=\"150\" width=\"130\" height=\"60\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"68\" y=\"187\" font-size=\"16\">TAT/OAT</text><rect x=\"245\" y=\"90\" width=\"145\" height=\"85\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"278\" y=\"126\" font-size=\"16\">Air Data</text><text x=\"275\" y=\"150\" font-size=\"16\">Computer</text><rect x=\"470\" y=\"70\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"493\" y=\"101\" font-size=\"15\">Altitude</text><rect x=\"470\" y=\"145\" width=\"110\" height=\"50\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"490\" y=\"176\" font-size=\"15\">Airspeed</text><line x1=\"165\" y1=\"85\" x2=\"245\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"165\" y1=\"180\" x2=\"245\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"115\" x2=\"470\" y2=\"95\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"150\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"3\"/></svg></div>",
      "concept": "AV-C035",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV141",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "A displayed altitude disagrees with a calibrated standby altimeter while airspeed and Mach are normal. What is the best diagnostic interpretation?",
      "options": [
        "Pitot pressure alone determines altitude, so inspect the pitot probe only.",
        "The fault may be limited to an altitude data path/display/source; normal other parameters do not prove the entire ADC system is good.",
        "The ADC must be completely serviceable because Mach is normal.",
        "The standby altimeter must be wrong because it is mechanical."
      ],
      "answer": 1,
      "explanation": "Different air-data outputs can use common and separate processing/paths; isolate the affected parameter systematically.",
      "visual": null,
      "concept": "AV-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV142",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "During troubleshooting, which answer is MOST accurate? A displayed altitude disagrees with a calibrated standby altimeter while airspeed and Mach are normal. What is the best diagnostic interpretation?",
      "options": [
        "The fault may be limited to an altitude data path/display/source; normal other parameters do not prove the entire ADC system is good.",
        "The ADC must be completely serviceable because Mach is normal.",
        "The standby altimeter must be wrong because it is mechanical.",
        "Pitot pressure alone determines altitude, so inspect the pitot probe only."
      ],
      "answer": 0,
      "explanation": "Different air-data outputs can use common and separate processing/paths; isolate the affected parameter systematically.",
      "visual": null,
      "concept": "AV-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV143",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "An AME E technician is evaluating the system. A displayed altitude disagrees with a calibrated standby altimeter while airspeed and Mach are normal. What is the best diagnostic interpretation?",
      "options": [
        "The ADC must be completely serviceable because Mach is normal.",
        "The standby altimeter must be wrong because it is mechanical.",
        "Pitot pressure alone determines altitude, so inspect the pitot probe only.",
        "The fault may be limited to an altitude data path/display/source; normal other parameters do not prove the entire ADC system is good."
      ],
      "answer": 3,
      "explanation": "Different air-data outputs can use common and separate processing/paths; isolate the affected parameter systematically.",
      "visual": null,
      "concept": "AV-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV144",
      "section": "28.1",
      "topic": "Air Data Computer",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A displayed altitude disagrees with a calibrated standby altimeter while airspeed and Mach are normal. What is the best diagnostic interpretation?",
      "options": [
        "The standby altimeter must be wrong because it is mechanical.",
        "Pitot pressure alone determines altitude, so inspect the pitot probe only.",
        "The fault may be limited to an altitude data path/display/source; normal other parameters do not prove the entire ADC system is good.",
        "The ADC must be completely serviceable because Mach is normal."
      ],
      "answer": 2,
      "explanation": "Different air-data outputs can use common and separate processing/paths; isolate the affected parameter systematically.",
      "visual": null,
      "concept": "AV-C036",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV145",
      "section": "24.3",
      "topic": "Modulation",
      "question": "Why does FM reject some amplitude noise better than AM?",
      "options": [
        "Information is carried primarily by frequency deviation, allowing amplitude variations to be limited in the receiver.",
        "FM carries all information only in carrier amplitude.",
        "AM receivers always use frequency discriminators identical to FM.",
        "Noise cannot affect FM under any condition."
      ],
      "answer": 0,
      "explanation": "FM receivers can limit amplitude variations before demodulation, reducing sensitivity to certain amplitude noise.",
      "visual": null,
      "concept": "AV-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV146",
      "section": "24.3",
      "topic": "Modulation",
      "question": "During troubleshooting, which answer is MOST accurate? Why does FM reject some amplitude noise better than AM?",
      "options": [
        "FM carries all information only in carrier amplitude.",
        "AM receivers always use frequency discriminators identical to FM.",
        "Noise cannot affect FM under any condition.",
        "Information is carried primarily by frequency deviation, allowing amplitude variations to be limited in the receiver."
      ],
      "answer": 3,
      "explanation": "FM receivers can limit amplitude variations before demodulation, reducing sensitivity to certain amplitude noise.",
      "visual": null,
      "concept": "AV-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV147",
      "section": "24.3",
      "topic": "Modulation",
      "question": "An AME E technician is evaluating the system. Why does FM reject some amplitude noise better than AM?",
      "options": [
        "AM receivers always use frequency discriminators identical to FM.",
        "Noise cannot affect FM under any condition.",
        "Information is carried primarily by frequency deviation, allowing amplitude variations to be limited in the receiver.",
        "FM carries all information only in carrier amplitude."
      ],
      "answer": 2,
      "explanation": "FM receivers can limit amplitude variations before demodulation, reducing sensitivity to certain amplitude noise.",
      "visual": null,
      "concept": "AV-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV148",
      "section": "24.3",
      "topic": "Modulation",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why does FM reject some amplitude noise better than AM?",
      "options": [
        "Noise cannot affect FM under any condition.",
        "Information is carried primarily by frequency deviation, allowing amplitude variations to be limited in the receiver.",
        "FM carries all information only in carrier amplitude.",
        "AM receivers always use frequency discriminators identical to FM."
      ],
      "answer": 1,
      "explanation": "FM receivers can limit amplitude variations before demodulation, reducing sensitivity to certain amplitude noise.",
      "visual": null,
      "concept": "AV-C037",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV149",
      "section": "24.1",
      "topic": "Propagation",
      "question": "Why is VHF aircraft communication primarily line-of-sight?",
      "options": [
        "VHF normally follows the ionosphere around the world.",
        "VHF always travels through the earth rather than atmosphere.",
        "VHF range is determined only by transmitter audio volume.",
        "At VHF, propagation is mainly direct and is strongly limited by radio horizon and terrain."
      ],
      "answer": 3,
      "explanation": "VHF aeronautical communication is predominantly direct-space propagation.",
      "visual": null,
      "concept": "AV-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV150",
      "section": "24.1",
      "topic": "Propagation",
      "question": "During troubleshooting, which answer is MOST accurate? Why is VHF aircraft communication primarily line-of-sight?",
      "options": [
        "VHF always travels through the earth rather than atmosphere.",
        "VHF range is determined only by transmitter audio volume.",
        "At VHF, propagation is mainly direct and is strongly limited by radio horizon and terrain.",
        "VHF normally follows the ionosphere around the world."
      ],
      "answer": 2,
      "explanation": "VHF aeronautical communication is predominantly direct-space propagation.",
      "visual": null,
      "concept": "AV-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV151",
      "section": "24.1",
      "topic": "Propagation",
      "question": "An AME E technician is evaluating the system. Why is VHF aircraft communication primarily line-of-sight?",
      "options": [
        "VHF range is determined only by transmitter audio volume.",
        "At VHF, propagation is mainly direct and is strongly limited by radio horizon and terrain.",
        "VHF normally follows the ionosphere around the world.",
        "VHF always travels through the earth rather than atmosphere."
      ],
      "answer": 1,
      "explanation": "VHF aeronautical communication is predominantly direct-space propagation.",
      "visual": null,
      "concept": "AV-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV152",
      "section": "24.1",
      "topic": "Propagation",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is VHF aircraft communication primarily line-of-sight?",
      "options": [
        "At VHF, propagation is mainly direct and is strongly limited by radio horizon and terrain.",
        "VHF normally follows the ionosphere around the world.",
        "VHF always travels through the earth rather than atmosphere.",
        "VHF range is determined only by transmitter audio volume."
      ],
      "answer": 0,
      "explanation": "VHF aeronautical communication is predominantly direct-space propagation.",
      "visual": null,
      "concept": "AV-C038",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV153",
      "section": "24.3",
      "topic": "Squelch",
      "question": "What is the purpose of receiver squelch?",
      "options": [
        "Tune the antenna to resonance.",
        "Convert AM to FM.",
        "Mute receiver audio when no sufficiently strong/valid signal is present, reducing background noise.",
        "Increase transmitter output power."
      ],
      "answer": 2,
      "explanation": "Squelch controls audio muting based on received signal/noise criteria.",
      "visual": null,
      "concept": "AV-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV154",
      "section": "24.3",
      "topic": "Squelch",
      "question": "During troubleshooting, which answer is MOST accurate? What is the purpose of receiver squelch?",
      "options": [
        "Convert AM to FM.",
        "Mute receiver audio when no sufficiently strong/valid signal is present, reducing background noise.",
        "Increase transmitter output power.",
        "Tune the antenna to resonance."
      ],
      "answer": 1,
      "explanation": "Squelch controls audio muting based on received signal/noise criteria.",
      "visual": null,
      "concept": "AV-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV155",
      "section": "24.3",
      "topic": "Squelch",
      "question": "An AME E technician is evaluating the system. What is the purpose of receiver squelch?",
      "options": [
        "Mute receiver audio when no sufficiently strong/valid signal is present, reducing background noise.",
        "Increase transmitter output power.",
        "Tune the antenna to resonance.",
        "Convert AM to FM."
      ],
      "answer": 0,
      "explanation": "Squelch controls audio muting based on received signal/noise criteria.",
      "visual": null,
      "concept": "AV-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV156",
      "section": "24.3",
      "topic": "Squelch",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the purpose of receiver squelch?",
      "options": [
        "Increase transmitter output power.",
        "Tune the antenna to resonance.",
        "Convert AM to FM.",
        "Mute receiver audio when no sufficiently strong/valid signal is present, reducing background noise."
      ],
      "answer": 3,
      "explanation": "Squelch controls audio muting based on received signal/noise criteria.",
      "visual": null,
      "concept": "AV-C039",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV157",
      "section": "24.4",
      "topic": "ILS",
      "question": "Which ILS component provides lateral course guidance?",
      "options": [
        "DME only.",
        "Localizer.",
        "Glideslope.",
        "Marker beacon only."
      ],
      "answer": 1,
      "explanation": "The localizer provides lateral guidance; glideslope provides vertical guidance.",
      "visual": null,
      "concept": "AV-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV158",
      "section": "24.4",
      "topic": "ILS",
      "question": "During troubleshooting, which answer is MOST accurate? Which ILS component provides lateral course guidance?",
      "options": [
        "Localizer.",
        "Glideslope.",
        "Marker beacon only.",
        "DME only."
      ],
      "answer": 0,
      "explanation": "The localizer provides lateral guidance; glideslope provides vertical guidance.",
      "visual": null,
      "concept": "AV-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV159",
      "section": "24.4",
      "topic": "ILS",
      "question": "An AME E technician is evaluating the system. Which ILS component provides lateral course guidance?",
      "options": [
        "Glideslope.",
        "Marker beacon only.",
        "DME only.",
        "Localizer."
      ],
      "answer": 3,
      "explanation": "The localizer provides lateral guidance; glideslope provides vertical guidance.",
      "visual": null,
      "concept": "AV-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV160",
      "section": "24.4",
      "topic": "ILS",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Which ILS component provides lateral course guidance?",
      "options": [
        "Marker beacon only.",
        "DME only.",
        "Localizer.",
        "Glideslope."
      ],
      "answer": 2,
      "explanation": "The localizer provides lateral guidance; glideslope provides vertical guidance.",
      "visual": null,
      "concept": "AV-C040",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV161",
      "section": "24.4",
      "topic": "ILS",
      "question": "Which ILS component provides vertical descent-path guidance?",
      "options": [
        "Glideslope.",
        "Localizer.",
        "ADF.",
        "VOR radial only."
      ],
      "answer": 0,
      "explanation": "The glideslope provides vertical guidance relative to the approach path.",
      "visual": null,
      "concept": "AV-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV162",
      "section": "24.4",
      "topic": "ILS",
      "question": "During troubleshooting, which answer is MOST accurate? Which ILS component provides vertical descent-path guidance?",
      "options": [
        "Localizer.",
        "ADF.",
        "VOR radial only.",
        "Glideslope."
      ],
      "answer": 3,
      "explanation": "The glideslope provides vertical guidance relative to the approach path.",
      "visual": null,
      "concept": "AV-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV163",
      "section": "24.4",
      "topic": "ILS",
      "question": "An AME E technician is evaluating the system. Which ILS component provides vertical descent-path guidance?",
      "options": [
        "ADF.",
        "VOR radial only.",
        "Glideslope.",
        "Localizer."
      ],
      "answer": 2,
      "explanation": "The glideslope provides vertical guidance relative to the approach path.",
      "visual": null,
      "concept": "AV-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV164",
      "section": "24.4",
      "topic": "ILS",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Which ILS component provides vertical descent-path guidance?",
      "options": [
        "VOR radial only.",
        "Glideslope.",
        "Localizer.",
        "ADF."
      ],
      "answer": 1,
      "explanation": "The glideslope provides vertical guidance relative to the approach path.",
      "visual": null,
      "concept": "AV-C041",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV165",
      "section": "24.10",
      "topic": "Transponders",
      "question": "Why is altitude-reporting transponder data important to surveillance/TCAS systems?",
      "options": [
        "It replaces all range/bearing information with cabin altitude.",
        "It is used only for weather radar gain control.",
        "It commands the other aircraft autopilot.",
        "It allows other systems to determine relative altitude as part of traffic assessment."
      ],
      "answer": 3,
      "explanation": "Pressure-altitude reporting is a key input for traffic separation/threat logic.",
      "visual": null,
      "concept": "AV-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV166",
      "section": "24.10",
      "topic": "Transponders",
      "question": "During troubleshooting, which answer is MOST accurate? Why is altitude-reporting transponder data important to surveillance/TCAS systems?",
      "options": [
        "It is used only for weather radar gain control.",
        "It commands the other aircraft autopilot.",
        "It allows other systems to determine relative altitude as part of traffic assessment.",
        "It replaces all range/bearing information with cabin altitude."
      ],
      "answer": 2,
      "explanation": "Pressure-altitude reporting is a key input for traffic separation/threat logic.",
      "visual": null,
      "concept": "AV-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV167",
      "section": "24.10",
      "topic": "Transponders",
      "question": "An AME E technician is evaluating the system. Why is altitude-reporting transponder data important to surveillance/TCAS systems?",
      "options": [
        "It commands the other aircraft autopilot.",
        "It allows other systems to determine relative altitude as part of traffic assessment.",
        "It replaces all range/bearing information with cabin altitude.",
        "It is used only for weather radar gain control."
      ],
      "answer": 1,
      "explanation": "Pressure-altitude reporting is a key input for traffic separation/threat logic.",
      "visual": null,
      "concept": "AV-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV168",
      "section": "24.10",
      "topic": "Transponders",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why is altitude-reporting transponder data important to surveillance/TCAS systems?",
      "options": [
        "It allows other systems to determine relative altitude as part of traffic assessment.",
        "It replaces all range/bearing information with cabin altitude.",
        "It is used only for weather radar gain control.",
        "It commands the other aircraft autopilot."
      ],
      "answer": 0,
      "explanation": "Pressure-altitude reporting is a key input for traffic separation/threat logic.",
      "visual": null,
      "concept": "AV-C042",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV169",
      "section": "25.2",
      "topic": "FMS Databases",
      "question": "Why must navigation databases be controlled for currency and correct part/cycle?",
      "options": [
        "Database currency matters only for passenger maps.",
        "The database is used only when radios are inoperative.",
        "FMS procedures and waypoints depend on the integrity and applicability of the loaded database.",
        "An outdated database cannot affect lateral or vertical guidance."
      ],
      "answer": 2,
      "explanation": "Navigation data is operationally significant and must match the approved/current cycle/application.",
      "visual": null,
      "concept": "AV-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV170",
      "section": "25.2",
      "topic": "FMS Databases",
      "question": "During troubleshooting, which answer is MOST accurate? Why must navigation databases be controlled for currency and correct part/cycle?",
      "options": [
        "The database is used only when radios are inoperative.",
        "FMS procedures and waypoints depend on the integrity and applicability of the loaded database.",
        "An outdated database cannot affect lateral or vertical guidance.",
        "Database currency matters only for passenger maps."
      ],
      "answer": 1,
      "explanation": "Navigation data is operationally significant and must match the approved/current cycle/application.",
      "visual": null,
      "concept": "AV-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV171",
      "section": "25.2",
      "topic": "FMS Databases",
      "question": "An AME E technician is evaluating the system. Why must navigation databases be controlled for currency and correct part/cycle?",
      "options": [
        "FMS procedures and waypoints depend on the integrity and applicability of the loaded database.",
        "An outdated database cannot affect lateral or vertical guidance.",
        "Database currency matters only for passenger maps.",
        "The database is used only when radios are inoperative."
      ],
      "answer": 0,
      "explanation": "Navigation data is operationally significant and must match the approved/current cycle/application.",
      "visual": null,
      "concept": "AV-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV172",
      "section": "25.2",
      "topic": "FMS Databases",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why must navigation databases be controlled for currency and correct part/cycle?",
      "options": [
        "An outdated database cannot affect lateral or vertical guidance.",
        "Database currency matters only for passenger maps.",
        "The database is used only when radios are inoperative.",
        "FMS procedures and waypoints depend on the integrity and applicability of the loaded database."
      ],
      "answer": 3,
      "explanation": "Navigation data is operationally significant and must match the approved/current cycle/application.",
      "visual": null,
      "concept": "AV-C043",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV173",
      "section": "26.5",
      "topic": "TRU/Rectifier",
      "question": "What is the function of a transformer rectifier unit in many aircraft?",
      "options": [
        "Measure generator frequency only.",
        "Convert AC power to regulated/usable DC power.",
        "Convert DC to AC at radio frequency.",
        "Store electrical energy chemically."
      ],
      "answer": 1,
      "explanation": "A TRU combines transformation and rectification to supply DC from an AC system.",
      "visual": null,
      "concept": "AV-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV174",
      "section": "26.5",
      "topic": "TRU/Rectifier",
      "question": "During troubleshooting, which answer is MOST accurate? What is the function of a transformer rectifier unit in many aircraft?",
      "options": [
        "Convert AC power to regulated/usable DC power.",
        "Convert DC to AC at radio frequency.",
        "Store electrical energy chemically.",
        "Measure generator frequency only."
      ],
      "answer": 0,
      "explanation": "A TRU combines transformation and rectification to supply DC from an AC system.",
      "visual": null,
      "concept": "AV-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV175",
      "section": "26.5",
      "topic": "TRU/Rectifier",
      "question": "An AME E technician is evaluating the system. What is the function of a transformer rectifier unit in many aircraft?",
      "options": [
        "Convert DC to AC at radio frequency.",
        "Store electrical energy chemically.",
        "Measure generator frequency only.",
        "Convert AC power to regulated/usable DC power."
      ],
      "answer": 3,
      "explanation": "A TRU combines transformation and rectification to supply DC from an AC system.",
      "visual": null,
      "concept": "AV-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV176",
      "section": "26.5",
      "topic": "TRU/Rectifier",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is the function of a transformer rectifier unit in many aircraft?",
      "options": [
        "Store electrical energy chemically.",
        "Measure generator frequency only.",
        "Convert AC power to regulated/usable DC power.",
        "Convert DC to AC at radio frequency."
      ],
      "answer": 2,
      "explanation": "A TRU combines transformation and rectification to supply DC from an AC system.",
      "visual": null,
      "concept": "AV-C044",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV177",
      "section": "26.5",
      "topic": "Inverter",
      "question": "What is an inverter used for?",
      "options": [
        "Convert DC electrical power into AC electrical power.",
        "Convert AC to DC.",
        "Increase battery chemical capacity.",
        "Provide RF antenna impedance matching."
      ],
      "answer": 0,
      "explanation": "An inverter synthesizes AC from a DC source.",
      "visual": null,
      "concept": "AV-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV178",
      "section": "26.5",
      "topic": "Inverter",
      "question": "During troubleshooting, which answer is MOST accurate? What is an inverter used for?",
      "options": [
        "Convert AC to DC.",
        "Increase battery chemical capacity.",
        "Provide RF antenna impedance matching.",
        "Convert DC electrical power into AC electrical power."
      ],
      "answer": 3,
      "explanation": "An inverter synthesizes AC from a DC source.",
      "visual": null,
      "concept": "AV-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV179",
      "section": "26.5",
      "topic": "Inverter",
      "question": "An AME E technician is evaluating the system. What is an inverter used for?",
      "options": [
        "Increase battery chemical capacity.",
        "Provide RF antenna impedance matching.",
        "Convert DC electrical power into AC electrical power.",
        "Convert AC to DC."
      ],
      "answer": 2,
      "explanation": "An inverter synthesizes AC from a DC source.",
      "visual": null,
      "concept": "AV-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV180",
      "section": "26.5",
      "topic": "Inverter",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is an inverter used for?",
      "options": [
        "Provide RF antenna impedance matching.",
        "Convert DC electrical power into AC electrical power.",
        "Convert AC to DC.",
        "Increase battery chemical capacity."
      ],
      "answer": 1,
      "explanation": "An inverter synthesizes AC from a DC source.",
      "visual": null,
      "concept": "AV-C045",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV181",
      "section": "26.7",
      "topic": "Ground Fault",
      "question": "A circuit works normally until a connector shell is moved, then faults intermittently. What is the most useful interpretation?",
      "options": [
        "The fault proves the software is intermittent.",
        "Movement cannot affect electrical faults if continuity passed once.",
        "Replace the power source first.",
        "Suspect connector/contact/wire strain, chafing or poor termination sensitive to movement."
      ],
      "answer": 3,
      "explanation": "Mechanical movement changing the symptom strongly implicates wiring/connector integrity.",
      "visual": null,
      "concept": "AV-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV182",
      "section": "26.7",
      "topic": "Ground Fault",
      "question": "During troubleshooting, which answer is MOST accurate? A circuit works normally until a connector shell is moved, then faults intermittently. What is the most useful interpretation?",
      "options": [
        "Movement cannot affect electrical faults if continuity passed once.",
        "Replace the power source first.",
        "Suspect connector/contact/wire strain, chafing or poor termination sensitive to movement.",
        "The fault proves the software is intermittent."
      ],
      "answer": 2,
      "explanation": "Mechanical movement changing the symptom strongly implicates wiring/connector integrity.",
      "visual": null,
      "concept": "AV-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV183",
      "section": "26.7",
      "topic": "Ground Fault",
      "question": "An AME E technician is evaluating the system. A circuit works normally until a connector shell is moved, then faults intermittently. What is the most useful interpretation?",
      "options": [
        "Replace the power source first.",
        "Suspect connector/contact/wire strain, chafing or poor termination sensitive to movement.",
        "The fault proves the software is intermittent.",
        "Movement cannot affect electrical faults if continuity passed once."
      ],
      "answer": 1,
      "explanation": "Mechanical movement changing the symptom strongly implicates wiring/connector integrity.",
      "visual": null,
      "concept": "AV-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV184",
      "section": "26.7",
      "topic": "Ground Fault",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. A circuit works normally until a connector shell is moved, then faults intermittently. What is the most useful interpretation?",
      "options": [
        "Suspect connector/contact/wire strain, chafing or poor termination sensitive to movement.",
        "The fault proves the software is intermittent.",
        "Movement cannot affect electrical faults if continuity passed once.",
        "Replace the power source first."
      ],
      "answer": 0,
      "explanation": "Mechanical movement changing the symptom strongly implicates wiring/connector integrity.",
      "visual": null,
      "concept": "AV-C046",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV185",
      "section": "27.3",
      "topic": "ELT Battery",
      "question": "Why are ELT batteries controlled by replacement/expiry requirements even if the ELT passes a brief self-test?",
      "options": [
        "The ELT operates from aircraft generators after a crash.",
        "Self-test fully discharges and capacity-tests the battery.",
        "A short self-test does not prove required emergency endurance and battery capacity.",
        "Battery age is irrelevant if open-circuit voltage is normal."
      ],
      "answer": 2,
      "explanation": "Emergency equipment batteries must meet specified capacity/endurance, not merely momentary voltage.",
      "visual": null,
      "concept": "AV-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV186",
      "section": "27.3",
      "topic": "ELT Battery",
      "question": "During troubleshooting, which answer is MOST accurate? Why are ELT batteries controlled by replacement/expiry requirements even if the ELT passes a brief self-test?",
      "options": [
        "Self-test fully discharges and capacity-tests the battery.",
        "A short self-test does not prove required emergency endurance and battery capacity.",
        "Battery age is irrelevant if open-circuit voltage is normal.",
        "The ELT operates from aircraft generators after a crash."
      ],
      "answer": 1,
      "explanation": "Emergency equipment batteries must meet specified capacity/endurance, not merely momentary voltage.",
      "visual": null,
      "concept": "AV-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV187",
      "section": "27.3",
      "topic": "ELT Battery",
      "question": "An AME E technician is evaluating the system. Why are ELT batteries controlled by replacement/expiry requirements even if the ELT passes a brief self-test?",
      "options": [
        "A short self-test does not prove required emergency endurance and battery capacity.",
        "Battery age is irrelevant if open-circuit voltage is normal.",
        "The ELT operates from aircraft generators after a crash.",
        "Self-test fully discharges and capacity-tests the battery."
      ],
      "answer": 0,
      "explanation": "Emergency equipment batteries must meet specified capacity/endurance, not merely momentary voltage.",
      "visual": null,
      "concept": "AV-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV188",
      "section": "27.3",
      "topic": "ELT Battery",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. Why are ELT batteries controlled by replacement/expiry requirements even if the ELT passes a brief self-test?",
      "options": [
        "Battery age is irrelevant if open-circuit voltage is normal.",
        "The ELT operates from aircraft generators after a crash.",
        "Self-test fully discharges and capacity-tests the battery.",
        "A short self-test does not prove required emergency endurance and battery capacity."
      ],
      "answer": 3,
      "explanation": "Emergency equipment batteries must meet specified capacity/endurance, not merely momentary voltage.",
      "visual": null,
      "concept": "AV-C047",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV189",
      "section": "28.0",
      "topic": "Gyros",
      "question": "What is gyroscopic rigidity in space?",
      "options": [
        "The magnetic alignment of a compass card.",
        "The tendency of a spinning rotor to maintain its plane of rotation unless acted on by an external torque.",
        "The tendency of a rotor to accelerate in the direction of applied torque without precession.",
        "A static-pressure effect used only by altimeters."
      ],
      "answer": 1,
      "explanation": "Rigidity is a fundamental property used in conventional gyro instruments.",
      "visual": null,
      "concept": "AV-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV190",
      "section": "28.0",
      "topic": "Gyros",
      "question": "During troubleshooting, which answer is MOST accurate? What is gyroscopic rigidity in space?",
      "options": [
        "The tendency of a spinning rotor to maintain its plane of rotation unless acted on by an external torque.",
        "The tendency of a rotor to accelerate in the direction of applied torque without precession.",
        "A static-pressure effect used only by altimeters.",
        "The magnetic alignment of a compass card."
      ],
      "answer": 0,
      "explanation": "Rigidity is a fundamental property used in conventional gyro instruments.",
      "visual": null,
      "concept": "AV-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV191",
      "section": "28.0",
      "topic": "Gyros",
      "question": "An AME E technician is evaluating the system. What is gyroscopic rigidity in space?",
      "options": [
        "The tendency of a rotor to accelerate in the direction of applied torque without precession.",
        "A static-pressure effect used only by altimeters.",
        "The magnetic alignment of a compass card.",
        "The tendency of a spinning rotor to maintain its plane of rotation unless acted on by an external torque."
      ],
      "answer": 3,
      "explanation": "Rigidity is a fundamental property used in conventional gyro instruments.",
      "visual": null,
      "concept": "AV-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV192",
      "section": "28.0",
      "topic": "Gyros",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is gyroscopic rigidity in space?",
      "options": [
        "A static-pressure effect used only by altimeters.",
        "The magnetic alignment of a compass card.",
        "The tendency of a spinning rotor to maintain its plane of rotation unless acted on by an external torque.",
        "The tendency of a rotor to accelerate in the direction of applied torque without precession."
      ],
      "answer": 2,
      "explanation": "Rigidity is a fundamental property used in conventional gyro instruments.",
      "visual": null,
      "concept": "AV-C048",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV193",
      "section": "28.0",
      "topic": "Gyros",
      "question": "What is gyroscopic precession?",
      "options": [
        "The response of a spinning rotor to an applied force approximately 90 degrees later in the direction of rotation in an idealized case.",
        "The immediate stopping of the rotor when torque is applied.",
        "A pressure lag in a vertical-speed indicator.",
        "A radio-frequency phase shift in an antenna cable."
      ],
      "answer": 0,
      "explanation": "Precession describes how a spinning gyro responds to applied torque.",
      "visual": null,
      "concept": "AV-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV194",
      "section": "28.0",
      "topic": "Gyros",
      "question": "During troubleshooting, which answer is MOST accurate? What is gyroscopic precession?",
      "options": [
        "The immediate stopping of the rotor when torque is applied.",
        "A pressure lag in a vertical-speed indicator.",
        "A radio-frequency phase shift in an antenna cable.",
        "The response of a spinning rotor to an applied force approximately 90 degrees later in the direction of rotation in an idealized case."
      ],
      "answer": 3,
      "explanation": "Precession describes how a spinning gyro responds to applied torque.",
      "visual": null,
      "concept": "AV-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV195",
      "section": "28.0",
      "topic": "Gyros",
      "question": "An AME E technician is evaluating the system. What is gyroscopic precession?",
      "options": [
        "A pressure lag in a vertical-speed indicator.",
        "A radio-frequency phase shift in an antenna cable.",
        "The response of a spinning rotor to an applied force approximately 90 degrees later in the direction of rotation in an idealized case.",
        "The immediate stopping of the rotor when torque is applied."
      ],
      "answer": 2,
      "explanation": "Precession describes how a spinning gyro responds to applied torque.",
      "visual": null,
      "concept": "AV-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV196",
      "section": "28.0",
      "topic": "Gyros",
      "question": "Choose the BEST answer based on normal aircraft maintenance practice. What is gyroscopic precession?",
      "options": [
        "A radio-frequency phase shift in an antenna cable.",
        "The response of a spinning rotor to an applied force approximately 90 degrees later in the direction of rotation in an idealized case.",
        "The immediate stopping of the rotor when torque is applied.",
        "A pressure lag in a vertical-speed indicator."
      ],
      "answer": 1,
      "explanation": "Precession describes how a spinning gyro responds to applied torque.",
      "visual": null,
      "concept": "AV-C049",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV197",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "A defect report is being investigated. The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It remains unchanged.",
        "It becomes four times as long.",
        "It becomes half as long.",
        "It doubles."
      ],
      "answer": 2,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV198",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It becomes half as long.",
        "It doubles.",
        "It remains unchanged.",
        "It becomes four times as long."
      ],
      "answer": 0,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV199",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It becomes four times as long.",
        "It becomes half as long.",
        "It doubles.",
        "It remains unchanged."
      ],
      "answer": 1,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV200",
      "section": "24.1",
      "topic": "Radio Waves",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. The diagram marks one wavelength λ. If propagation speed remains constant and frequency doubles, what happens to wavelength?",
      "options": [
        "It doubles.",
        "It remains unchanged.",
        "It becomes four times as long.",
        "It becomes half as long."
      ],
      "answer": 3,
      "explanation": "c = fλ, so for essentially constant propagation speed, wavelength is inversely proportional to frequency.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-wave wavelength</div><svg viewBox=\"0 0 620 260\" role=\"img\" aria-label=\"Radio-wave wavelength\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"60,130.0 64,118.8 68,108.3 72,99.2 76,92.0 80,87.2 84,85.1 88,85.8 92,89.3 96,95.3 100,103.5 104,113.4 108,124.4 112,135.6 116,146.6 120,156.5 124,164.7 128,170.7 132,174.2 136,174.9 140,172.8 144,168.0 148,160.8 152,151.7 156,141.2 160,130.0 164,118.8 168,108.3 172,99.2 176,92.0 180,87.2 184,85.1 188,85.8 192,89.3 196,95.3 200,103.5 204,113.4 208,124.4 212,135.6 216,146.6 220,156.5 224,164.7 228,170.7 232,174.2 236,174.9 240,172.8 244,168.0 248,160.8 252,151.7 256,141.2 260,130.0 264,118.8 268,108.3 272,99.2 276,92.0 280,87.2 284,85.1 288,85.8 292,89.3 296,95.3 300,103.5 304,113.4 308,124.4 312,135.6 316,146.6 320,156.5 324,164.7 328,170.7 332,174.2 336,174.9 340,172.8 344,168.0 348,160.8 352,151.7 356,141.2 360,130.0 364,118.8 368,108.3 372,99.2 376,92.0 380,87.2 384,85.1 388,85.8 392,89.3 396,95.3 400,103.5 404,113.4 408,124.4 412,135.6 416,146.6 420,156.5 424,164.7 428,170.7 432,174.2 436,174.9 440,172.8 444,168.0 448,160.8 452,151.7 456,141.2 460,130.0 464,118.8 468,108.3 472,99.2 476,92.0 480,87.2 484,85.1 488,85.8 492,89.3 496,95.3 500,103.5 504,113.4 508,124.4 512,135.6 516,146.6 520,156.5 524,164.7 528,170.7 532,174.2 536,174.9 540,172.8 544,168.0 548,160.8 552,151.7 556,141.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"60\" y1=\"130\" x2=\"560\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"205\" x2=\"210\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110,205 125,198 125,212\" fill=\"currentColor\"/><polygon points=\"210,205 195,198 195,212\" fill=\"currentColor\"/><text x=\"137\" y=\"230\" font-size=\"16\">one wavelength λ</text></svg></div>",
      "concept": "AV-C001",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV201",
      "section": "24.2",
      "topic": "Antennas",
      "question": "A defect report is being investigated. A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low.",
        "Normal DC bonding resistance of the airframe."
      ],
      "answer": 0,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV202",
      "section": "24.2",
      "topic": "Antennas",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low."
      ],
      "answer": 1,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV203",
      "section": "24.2",
      "topic": "Antennas",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low.",
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power."
      ],
      "answer": 3,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV204",
      "section": "24.2",
      "topic": "Antennas",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A high VSWR is measured on a VHF antenna feed line. What does this most strongly indicate?",
      "options": [
        "Normal DC bonding resistance of the airframe.",
        "A significant impedance mismatch causing reflected RF power.",
        "Perfect impedance matching and maximum power transfer.",
        "A receiver squelch setting that is too low."
      ],
      "answer": 1,
      "explanation": "High VSWR indicates a large reflected-to-forward wave relationship, commonly caused by antenna/feed-line mismatch or faults.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Feed-line standing-wave concept</div><svg viewBox=\"0 0 620 240\" role=\"img\" aria-label=\"Feed-line standing-wave concept\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"70\" y1=\"150\" x2=\"550\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"70,145 100,95 130,205 160,95 190,205 220,95 250,205 280,95 310,205 340,95 370,205 400,95 430,205 460,95 490,205 520,95 550,145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"70\" y=\"50\" font-size=\"17\">Standing-wave envelope on a mismatched feed line</text></svg></div>",
      "concept": "AV-C002",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV205",
      "section": "24.2",
      "topic": "Antennas",
      "question": "A defect report is being investigated. Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically."
      ],
      "answer": 1,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV206",
      "section": "24.2",
      "topic": "Antennas",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically.",
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance."
      ],
      "answer": 3,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV207",
      "section": "24.2",
      "topic": "Antennas",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio.",
        "It increases transmitter frequency automatically."
      ],
      "answer": 1,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV208",
      "section": "24.2",
      "topic": "Antennas",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. Why is an antenna ground plane important for many quarter-wave aircraft antennas?",
      "options": [
        "It increases transmitter frequency automatically.",
        "It eliminates the need for coaxial shielding.",
        "It forms part of the RF current path and affects radiation pattern and impedance.",
        "It is used only to carry DC load current for the radio."
      ],
      "answer": 2,
      "explanation": "Many monopole antennas rely on the conductive aircraft structure as the counterpoise/ground plane.",
      "visual": null,
      "concept": "AV-C003",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV209",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "A defect report is being investigated. A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance."
      ],
      "answer": 3,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV210",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna."
      ],
      "answer": 1,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV211",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault.",
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting."
      ],
      "answer": 2,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV212",
      "section": "24.3",
      "topic": "VHF Communication",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A VHF COM receiver is clear at short range but weak in all directions beyond a few miles. Which fault is most plausible?",
      "options": [
        "Antenna/feed-line loss or poor antenna bonding reducing received/transmitted RF performance.",
        "Incorrect altimeter barometric setting.",
        "A failed radio-altimeter antenna.",
        "An autopilot pitch-servo clutch fault."
      ],
      "answer": 0,
      "explanation": "A broad loss of communication range points toward RF path/antenna/feed-line performance rather than unrelated systems.",
      "visual": null,
      "concept": "AV-C004",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV213",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "A defect report is being investigated. Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation.",
        "To generate the aircraft DC bus voltage."
      ],
      "answer": 1,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV214",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation."
      ],
      "answer": 2,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV215",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation.",
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements."
      ],
      "answer": 0,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV216",
      "section": "24.3",
      "topic": "HF Communication",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. Why is an antenna coupler commonly used with aircraft HF systems?",
      "options": [
        "To generate the aircraft DC bus voltage.",
        "To replace all antenna bonding requirements.",
        "To transform the antenna system impedance so the transmitter can operate efficiently over a wide frequency range.",
        "To convert HF modulation into VHF line-of-sight propagation."
      ],
      "answer": 2,
      "explanation": "HF wavelength changes greatly across the band, so an antenna tuning/coupling unit matches the practical aircraft antenna to the transmitter.",
      "visual": null,
      "concept": "AV-C005",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV217",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "A defect report is being investigated. The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only."
      ],
      "answer": 2,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV218",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only.",
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction."
      ],
      "answer": 0,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV219",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course.",
        "Turn left because the needle always shows the direction of station passage only."
      ],
      "answer": 2,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV220",
      "section": "24.4",
      "topic": "VOR Navigation",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. The CDI is right of centre with a TO indication as shown. What correction is generally required to intercept the selected course, assuming normal sensing?",
      "options": [
        "Turn left because the needle always shows the direction of station passage only.",
        "Maintain heading because CDI displacement represents altitude error.",
        "Reverse the OBS by 180° before any correction.",
        "Fly toward the needle - turn right to intercept the selected course."
      ],
      "answer": 3,
      "explanation": "With normal VOR sensing, CDI displacement indicates the selected course is to that side of the aircraft; fly toward the needle to intercept.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified VOR/HSI indication</div><svg viewBox=\"0 0 620 270\" role=\"img\" aria-label=\"Simplified VOR/HSI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"310\" y1=\"45\" x2=\"310\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"135\" x2=\"400\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"350\" y1=\"78\" x2=\"350\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"6\"/><polygon points=\"310,45 300,65 320,65\" fill=\"currentColor\"/><text x=\"295\" y=\"30\" font-size=\"18\">N</text><text x=\"445\" y=\"140\" font-size=\"17\">CDI right of center</text><rect x=\"278\" y=\"92\" width=\"64\" height=\"32\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"114\" font-size=\"15\">TO</text></svg></div>",
      "concept": "AV-C006",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV221",
      "section": "24.4",
      "topic": "DME",
      "question": "A defect report is being investigated. DME determines distance primarily by measuring what?",
      "options": [
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only."
      ],
      "answer": 0,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV222",
      "section": "24.4",
      "topic": "DME",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? DME determines distance primarily by measuring what?",
      "options": [
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals."
      ],
      "answer": 2,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV223",
      "section": "24.4",
      "topic": "DME",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. DME determines distance primarily by measuring what?",
      "options": [
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier.",
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range."
      ],
      "answer": 3,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV224",
      "section": "24.4",
      "topic": "DME",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. DME determines distance primarily by measuring what?",
      "options": [
        "The Doppler shift of GPS satellites only.",
        "The time delay of coded pulse-pair interrogation and reply, converted to slant range.",
        "The phase difference between VOR reference and variable signals.",
        "The amplitude of an NDB audio identifier."
      ],
      "answer": 1,
      "explanation": "DME is a pulse-ranging system; elapsed time corresponds to slant-range distance.",
      "visual": null,
      "concept": "AV-C007",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV225",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "A defect report is being investigated. What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Glideslope deviation.",
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display.",
        "Distance to the station in nautical miles."
      ],
      "answer": 2,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV226",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Distance to the station in nautical miles.",
        "Glideslope deviation.",
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display."
      ],
      "answer": 3,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV227",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display.",
        "Distance to the station in nautical miles.",
        "Glideslope deviation."
      ],
      "answer": 1,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV228",
      "section": "24.4",
      "topic": "ADF/NDB",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. What does an ADF bearing pointer fundamentally indicate when operating normally?",
      "options": [
        "Distance to the station in nautical miles.",
        "Glideslope deviation.",
        "Localizer course width.",
        "Direction to the selected NDB relative to the aircraft/reference display."
      ],
      "answer": 3,
      "explanation": "ADF provides bearing information, not distance.",
      "visual": null,
      "concept": "AV-C008",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV229",
      "section": "24.7",
      "topic": "RMI",
      "question": "A defect report is being investigated. The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit.",
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card."
      ],
      "answer": 3,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV230",
      "section": "24.7",
      "topic": "RMI",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card.",
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit."
      ],
      "answer": 1,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV231",
      "section": "24.7",
      "topic": "RMI",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit.",
        "Radio-altimeter height.",
        "Bearing to the tuned radio-navigation station, referenced to the compass card."
      ],
      "answer": 3,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV232",
      "section": "24.7",
      "topic": "RMI",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. The pointer head on the simplified RMI is approximately 045°. What information does that pointer normally provide?",
      "options": [
        "Bearing to the tuned radio-navigation station, referenced to the compass card.",
        "Aircraft pitch attitude.",
        "Selected autopilot bank limit.",
        "Radio-altimeter height."
      ],
      "answer": 0,
      "explanation": "An RMI combines heading information with bearing pointer(s) to navigation stations.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Simplified RMI indication</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Simplified RMI indication\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"310\" cy=\"135\" r=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"28\" font-size=\"18\">N</text><text x=\"410\" y=\"142\" font-size=\"18\">E</text><text x=\"301\" y=\"253\" font-size=\"18\">S</text><text x=\"195\" y=\"142\" font-size=\"18\">W</text><line x1=\"310\" y1=\"135\" x2=\"385\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"5\"/><polygon points=\"385,80 367,86 379,101\" fill=\"currentColor\"/><line x1=\"310\" y1=\"135\" x2=\"260\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"440\" y=\"65\" font-size=\"16\">Pointer head ≈ 045°</text></svg></div>",
      "concept": "AV-C009",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV233",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "A defect report is being investigated. Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only."
      ],
      "answer": 1,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV234",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy."
      ],
      "answer": 3,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV235",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level.",
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential."
      ],
      "answer": 0,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV236",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. Why is radio-altimeter height called a direct or absolute height measurement?",
      "options": [
        "It calculates terrain clearance from GPS database elevation only.",
        "It measures cabin pressure differential.",
        "It measures distance from the aircraft to the terrain immediately below using transmitted and returned RF energy.",
        "It derives height solely from static pressure relative to sea level."
      ],
      "answer": 2,
      "explanation": "Radio altitude is based on RF propagation time/frequency relationship between aircraft and terrain, not barometric pressure.",
      "visual": "<div class=\"visual-card\"><div class=\"visual-label\">Radio-altimeter path</div><svg viewBox=\"0 0 620 280\" role=\"img\" aria-label=\"Radio-altimeter path\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"40\" width=\"500\" height=\"145\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"67\" font-size=\"16\">Aircraft</text><line x1=\"215\" y1=\"185\" x2=\"265\" y2=\"235\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"265,235 248,228 257,213\" fill=\"currentColor\"/><line x1=\"405\" y1=\"235\" x2=\"455\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"455,185 438,191 447,206\" fill=\"currentColor\"/><line x1=\"20\" y1=\"240\" x2=\"600\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"280\" y=\"260\" font-size=\"16\">terrain</text><text x=\"170\" y=\"215\" font-size=\"14\">transmit</text><text x=\"435\" y=\"220\" font-size=\"14\">return</text></svg></div>",
      "concept": "AV-C010",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV237",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "A defect report is being investigated. A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Pitot heat current only.",
        "VOR OBS resolver alignment.",
        "Battery electrolyte level.",
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path."
      ],
      "answer": 3,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV238",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "Following maintenance, a functional check is performed. During troubleshooting, which answer is MOST accurate? A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only.",
        "VOR OBS resolver alignment.",
        "Battery electrolyte level."
      ],
      "answer": 0,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV239",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "During an inspection, the technician must decide which statement controls. An AME E technician is evaluating the system. A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "VOR OBS resolver alignment.",
        "Battery electrolyte level.",
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only."
      ],
      "answer": 2,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    },
    {
      "id": "AV240",
      "section": "24.5",
      "topic": "Radio Altimeter",
      "question": "A system has an intermittent discrepancy. Choose the BEST answer based on normal aircraft maintenance practice. A radio altimeter is accurate at low altitude but intermittently flags during banked turns. Which area should be considered?",
      "options": [
        "Antenna installation, coax condition and aircraft attitude/terrain geometry affecting the RF path.",
        "Pitot heat current only.",
        "VOR OBS resolver alignment.",
        "Battery electrolyte level."
      ],
      "answer": 0,
      "explanation": "Radio-altimeter performance depends on the antenna/RF path to terrain as well as system integrity.",
      "visual": null,
      "concept": "AV-C011",
      "difficulty": "Transport Canada-style practice"
    }
  ]
};
