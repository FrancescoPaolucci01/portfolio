/* English / Italian portfolio. Source texts remain available in Italian. */
(() => {
const translations = {
  "Pagina non trovata | Francesco Paolucci": "Page not found | Francesco Paolucci",
  "Vai al contenuto": "Skip to content",
  "Portfolio tecnico": "Engineering portfolio",
  "Progetti": "Projects",
  "Percorso": "Background",
  "Contatti ": "Contact ",
  "Errore 404": "Error 404",
  "Pagina non trovata": "Page not found",
  "Il contenuto richiesto non è disponibile. La documentazione è consultabile dalla pagina iniziale.": "The requested content is unavailable. You can browse the project documentation from the home page.",
  "Pagina iniziale →": "Home page →",
  "© 2026 Francesco Paolucci · Progettazione, analisi e sviluppo prodotto": "© 2026 Francesco Paolucci · Mechanical design, analysis and product development",
  "Contatti professionali": "Professional contacts",
  "Il contenuto richiesto non è disponibile.": "The requested content is unavailable.",
  "Francesco Paolucci, pagina iniziale": "Francesco Paolucci, home page",
  "Navigazione principale": "Main navigation",
  "Francesco Paolucci | Portfolio di ingegneria meccanica": "Francesco Paolucci | Mechanical Engineering Portfolio",
  "Portfolio di ingegneria meccanica": "Mechanical Engineering Portfolio",
  "Laureato in Ingegneria meccanica e studente magistrale all’Università degli Studi di Perugia.": "Mechanical engineering graduate and master's student at the University of Perugia.",
  "Disponibilità per tirocinio o primo impiego": "Available for internships and entry-level roles",
  "Consulta i progetti ": "Browse projects ",
  "Disco freno flottante": "Floating brake disc",
  "Ottimizzazione strutturale": "Structural optimisation",
  "Documentazione tecnica →": "Technical documentation →",
  "Profilo tecnico": "Technical Profile",
  "Esperienze progettuali in modellazione CAD, analisi strutturale, sviluppo prodotto e misure sperimentali. Interesse professionale per produzione, progettazione meccanica e simulazione.": "Project experience in CAD modelling, structural analysis, product development and experimental measurements. Professional interests in manufacturing, mechanical design and simulation.",
  "Tutti": "All",
  "Progettazione": "Design",
  "Analisi": "Analysis",
  "Processi": "Processes",
  "5 progetti visualizzati.": "5 projects displayed.",
  "A.A. 2026/2027": "Academic Year 2026/2027",
  "Modellazione e analisi strutturale di un disco freno flottante, con ottimizzazione della massa e preparazione virtuale del prototipo.": "Modelling and structural analysis of a floating brake disc, including mass optimisation and virtual prototype preparation.",
  "A.A. 2025/2026": "Academic Year 2025/2026",
  "Definizione delle specifiche, selezione del concept, modellazione dell’assieme e valutazione preliminare dei costi di produzione.": "Specification definition, concept selection, assembly modelling and preliminary production cost assessment.",
  "Progetto universitario": "Academic project",
  "Meccanismo pick-and-place": "Pick-and-place mechanism",
  "Dimensionamento e modellazione di un sistema a un grado di libertà; studio di traiettorie, velocità e accelerazioni dei componenti.": "Sizing and modelling of a system with one degree of freedom; analysis of component trajectories, velocities and accelerations.",
  "Analisi DIC": "DIC analysis",
  "Misura ottica dei campi di spostamento e deformazione mediante MATLAB/Ncorr, con confronto tra provino integro e danneggiato.": "Optical measurement of displacement and strain fields using MATLAB/Ncorr, comparing intact and damaged specimens.",
  "Ottobre 2026": "October 2026",
  "Sviluppo completo dello script per gli adempimenti ospiti e contributo al gestionale collegato all'interfaccia del soggiorno.": "Complete development of the guest registration automation script and contribution to the management system linked to the guest interface.",
  "OCR locale / Automazione browser / WebCheckIn": "Local OCR / Browser automation / WebCheckIn",
  "Documentazione tecnica": "Technical Documentation",
  "Criteri di presentazione": "Presentation Approach",
  "Attività e contributi": "Activities and Contributions",
  "Ogni scheda riporta obiettivi, metodi, strumenti e autori del progetto. I lavori universitari sono presentati come attività di gruppo; per HackCortona è specificato il contributo individuale.": "Each project page describes its objectives, methods, tools and authors. Academic projects are presented as team activities; the individual contribution is specified for HackCortona.",
  "Risultati e limiti": "Results and Limitations",
  "La documentazione distingue risultati numerici, evidenze sperimentali e stime economiche, riportando ipotesi di analisi e verifiche ancora necessarie.": "The documentation distinguishes numerical results, experimental evidence and cost estimates, stating the analysis assumptions and the checks still required.",
  "Formazione e riconoscimenti": "Education and Awards",
  "2024 — in corso": "2024 — Present",
  "Laurea magistrale in Ingegneria meccanica": "Master's Degree in Mechanical Engineering",
  "Università degli Studi di Perugia · conseguimento previsto aprile 2027": "University of Perugia · expected graduation April 2027",
  "Laurea triennale in Ingegneria meccanica": "Bachelor's Degree in Mechanical Engineering",
  "Università degli Studi di Perugia": "University of Perugia",
  "HackCortona · team vincitore": "HackCortona · winning team",
  "Progetto HTT · automazione degli adempimenti e gestionale web": "HTT project · guest registration automation and web management system",
  "Settembre 2026": "September 2026",
  "Settembre 2025": "September 2025",
  "Primo posto al BPMGame": "First place in the BPMGame",
  "Workshop Brunello Cucinelli & SAP BPM · diagrammi e miglioramento dei processi": "Brunello Cucinelli & SAP BPM workshop · process mapping and improvement",
  "Informazioni professionali": "Professional Information",
  "Contatti": "Contact",
  "Per opportunità di tirocinio, primo impiego o richieste di approfondimento sui progetti.": "For internship and entry-level opportunities, or further information about the projects.",
  "Progetti in progettazione meccanica, analisi FEM, misure DIC e automazione dei processi. Portfolio di Francesco Paolucci.": "Projects in mechanical design, finite element analysis, DIC measurements and process automation. Francesco Paolucci's portfolio.",
  "Geometrie CAD ottimizzate della campana e della fascia di un disco freno flottante": "Optimised CAD geometries of the carrier and friction ring of a floating brake disc",
  "Filtra i progetti per ambito": "Filter projects by area",
  "Scopri il progetto: Disco freno flottante": "Explore project: Floating brake disc",
  "Geometrie alleggerite della campana e della fascia frenante ricostruite in CAD": "Lightweight carrier and friction ring geometries reconstructed in CAD",
  "Scopri il progetto: POST TECH": "Explore project: POST TECH",
  "Modello CAD della postazione con sedia regolabile e banco indipendente elettrificato": "CAD model of the workstation with adjustable chair and independent desk with integrated power",
  "Scopri il progetto: Meccanismo pick-and-place": "Explore project: Pick-and-place mechanism",
  "Assieme CAD del meccanismo con quadrilatero articolato, piatto rotante e croce di Malta": "CAD assembly of the mechanism with a four-bar linkage, rotating plate and Geneva mechanism",
  "Scopri il progetto: Analisi DIC": "Explore project: DIC analysis",
  "Mappa a colori del campo di spostamento sul provino trabecolare ottenuta con Ncorr": "Colour map of the trabecular specimen's displacement field obtained using Ncorr",
  "Scopri il progetto: HackCortona 2026": "Explore project: HackCortona 2026",
  "Interfaccia del catalogo ville del prototipo HTT sviluppato dal team a HackCortona": "Villa catalogue interface of the HTT prototype developed by the HackCortona team",
  "Analisi DIC | Francesco Paolucci": "DIC Analysis | Francesco Paolucci",
  "← Tutti i progetti": "← All projects",
  "Analisi · A.A. 2025/2026": "Analysis · Academic Year 2025/2026",
  "Rilievo ottico di un provino trabecolare": "Optical measurement of a trabecular specimen",
  "Scarica la scheda PDF ": "Download project brief (PDF, Italian) ",
  "Campo di spostamento ottenuto dall'elaborazione delle immagini con Ncorr.": "Displacement field obtained by processing images using Ncorr.",
  "misura ottica senza contatto con MATLAB/Ncorr": "non-contact optical measurement using MATLAB/Ncorr",
  "Contesto": "Context",
  "Misure meccaniche con analisi di immagini e onde": "Mechanical Measurements Using Image and Wave Analysis",
  "Gruppo": "Team",
  "3 persone": "3 people",
  "Metodi": "Methods",
  "Misure sperimentali · Elaborazione immagini · Analisi dei dati · Valutazione degli errori": "Experimental measurements · Image processing · Data analysis · Error assessment",
  "Obiettivo del progetto": "Project Objective",
  "Analizzare la risposta di un campione trabecolare in nylon stampato in 3D attraverso la correlazione di immagini e confrontarne il comportamento prima e dopo il danneggiamento.": "Analyse the response of a 3D-printed nylon trabecular specimen using image correlation and compare its behaviour before and after damage.",
  "Attività del gruppo": "Team Activities",
  "Preparazione dello speckle e acquisizione fotografica con carichi applicati tramite masse calibrate.": "Speckle preparation and image acquisition under loads applied using calibrated masses.",
  "Selezione della ROI, definizione di subset e seed, calibrazione della scala ed elaborazione dei campi con Ncorr in MATLAB.": "ROI selection, subset and seed definition, scale calibration and field processing using Ncorr in MATLAB.",
  "Confronto fra provino integro e danneggiato e valutazione dell'influenza di qualità ottica e parametri di correlazione.": "Comparison of intact and damaged specimens and assessment of the influence of optical quality and correlation parameters.",
  "Risultati": "Results",
  "I campi di spostamento risultano coerenti con la previsione macroscopica. Il confronto evidenzia una maggiore flessione del provino danneggiato a parità di carico. Il lavoro mette in evidenza quanto il controllo dell'acquisizione sia importante per la qualità della misura.": "The displacement fields are consistent with the expected macroscopic behaviour. The comparison shows greater bending of the damaged specimen under the same load. The work highlights the importance of controlled image acquisition for measurement quality.",
  "Ipotesi e limiti": "Assumptions and Limitations",
  "Il cambio di zoom rende non valido il confronto fra alcuni step di carico: per il provino integro viene utilizzato lo step valido da 500 g. Le dimensioni dello speckle limitano l'affidabilità quantitativa delle deformazioni locali.": "A change in zoom invalidates the comparison between some load steps: the valid 500 g step is used for the intact specimen. Speckle size limits the quantitative reliability of local strain measurements.",
  "Provino in nylon e configurazione della prova sperimentale.": "Nylon specimen and experimental test setup.",
  "Ruolo nel progetto": "Role in the Project",
  "Partecipazione al progetto universitario in un team di tre persone. Acquisizione, elaborazioni e conclusioni sono presentate come lavoro del gruppo.": "Participation in an academic project in a team of three. Image acquisition, processing and conclusions are presented as the team's work.",
  "Gruppo di lavoro": "Project Team",
  "Immagini tratte dagli elaborati del team. Scheda di sintesi per il portfolio; documentazione completa disponibile su richiesta.": "Images taken from the team's project materials. Portfolio summary; full documentation available on request.",
  "Dati del progetto": "Project information",
  "Disco freno flottante | Francesco Paolucci": "Floating Brake Disc | Francesco Paolucci",
  "Analisi · A.A. 2026/2027": "Analysis · Academic Year 2026/2027",
  "Ottimizzazione strutturale e produzione additiva": "Structural optimisation and additive manufacturing",
  "Campana centrale e fascia frenante: geometrie definitive ricostruite in SolidWorks.": "Central carrier and friction ring: final geometries reconstructed in SolidWorks.",
  "−34,3%": "−34.3%",
  "massa dell'assieme nel modello di progetto": "assembly mass in the design model",
  "Tecnologie Avanzate Sviluppo Prodotto": "Advanced Product Development Technologies",
  "4 persone": "4 people",
  "Analisi FEM · Ottimizzazione topologica · DfAM · Verifica a fatica": "FEA · Topology optimisation · DfAM · Fatigue assessment",
  "Ridurre la massa di un disco freno flottante da motocicletta conservando le regioni funzionali e verificando il comportamento strutturale delle nuove geometrie.": "Reduce the mass of a motorcycle floating brake disc while preserving functional regions and verifying the structural behaviour of the new geometries.",
  "Modellazione CAD e dimensionamento dei carichi; analisi statiche con controllo della convergenza della mesh.": "CAD modelling and load definition; static analysis with mesh convergence checks.",
  "Confronto fra ottimizzazione parametrica e topologica, ricostruzione delle geometrie e verifica dell'assieme.": "Comparison of parametric and topology optimisation, geometry reconstruction and assembly verification.",
  "Analisi di sensibilità alla ripartizione del carico, valutazione a fatica e preparazione dello slicing FDM con stima di tempi e costi.": "Sensitivity analysis of load distribution, fatigue assessment and FDM slicing preparation with time and cost estimates.",
  "Nel modello, la massa dell'assieme passa da 2.831,6 a 1.861,8 g. La campana si alleggerisce del 29,1% e la fascia del 35,3%. La relazione individua nella finitura dei fori e delle sedi della campana un requisito per la verifica a fatica.": "In the model, assembly mass decreases from 2,831.6 to 1,861.8 g. Carrier mass falls by 29.1% and friction ring mass by 35.3%. The report identifies finishing of the carrier holes and seats as a requirement for fatigue verification.",
  "Risultati numerici di un progetto universitario. Il prototipo FDM in PLA è previsto per verificare forma e montaggio, non per l'impiego come componente frenante. Restano da sviluppare prove fisiche e analisi termo-strutturali.": "Numerical results from an academic project. The PLA FDM prototype is intended for form and fit checks, rather than use as a braking component. Physical testing and thermostructural analysis remain to be developed.",
  "Assieme iniziale semplificato del disco flottante, prima dell'ottimizzazione.": "Simplified initial floating disc assembly, before optimisation.",
  "Partecipazione al progetto universitario in un team di quattro persone. Le attività e i risultati qui presentati si riferiscono al lavoro del gruppo.": "Participation in an academic project in a team of four. The activities and results presented here refer to the team's work.",
  "Processi · Ottobre 2026": "Processes · October 2026",
  "Automazione degli adempimenti e gestione del soggiorno": "Guest registration automation and stay management",
  "OCR locale": "Local OCR",
  "Automazione browser": "Browser automation",
  "Gestionale web": "Web management system",
  "Una delle interfacce del prototipo HTT realizzato dal team durante HackCortona.": "One of the HTT prototype interfaces developed by the team during HackCortona.",
  "Team vincitore": "Winning team",
  "tre giorni di lavoro, otto partecipanti": "three days of work, eight participants",
  "HackCortona - Progetto HTT / Hill Town Tours": "HackCortona - HTT / Hill Town Tours Project",
  "8 persone": "8 people",
  "Automazione dei processi · Integrazione di sistemi · Problem solving · Lavoro multidisciplinare": "Process automation · Systems integration · Problem solving · Multidisciplinary teamwork",
  "Ridurre i passaggi ripetitivi nella gestione degli ospiti, collegando il percorso del soggiorno, le attività dello staff e la preparazione degli adempimenti.": "Reduce repetitive steps in guest management by connecting the guest journey, staff activities and preparation of registration requirements.",
  "Contributo individuale": "Individual Contribution",
  "Sviluppo completo dello script che legge localmente i documenti tramite OCR e automatizza la compilazione di WebCheckIn.": "Complete development of the script that reads documents locally using OCR and automates WebCheckIn form completion.",
  "Preparazione del file per Alloggiati Web, mantenendo la revisione e il controllo dell'operatore.": "Preparation of the Alloggiati Web file, retaining operator review and control.",
  "Contributo alla realizzazione del gestionale web dello staff collegato all'interfaccia ospiti.": "Contribution to the staff web management system linked to the guest interface.",
  "Acquisizione": "Acquisition",
  "Documento e OCR locale": "Document and local OCR",
  "Controllo": "Verification",
  "Revisione dei dati": "Data review",
  "Compilazione": "Form completion",
  "Automazione WebCheckIn": "WebCheckIn automation",
  "Preparazione": "Preparation",
  "File per Alloggiati Web": "Alloggiati Web file",
  "Il progetto di team integra un portale ospiti, un gestionale e l'automazione degli adempimenti. La relazione documenta il funzionamento dell'automazione sul portale reale. Il team è risultato vincitore dell'evento.": "The team project integrates a guest portal, a management system and registration automation. The report documents the automation running on the actual portal. The team won the event.",
  "Prototipo sviluppato durante un hackathon. Le integrazioni da attivare e le stime economiche del report non sono presentate come risparmi già ottenuti in esercizio.": "Prototype developed during a hackathon. Pending integrations and the report's financial estimates are not presented as savings already achieved in operation.",
  "Sviluppo completo dello script di automazione degli adempimenti e contributo alla realizzazione del gestionale web collegato all’interfaccia ospiti.": "Complete development of the registration automation script and contribution to the web management system linked to the guest interface.",
  "Disco freno flottante ": "Floating brake disc ",
  "Flusso dell'automazione": "Automation workflow",
  "Meccanismo pick-and-place | Francesco Paolucci": "Pick-and-Place Mechanism | Francesco Paolucci",
  "Progettazione · Progetto universitario": "Design · Academic project",
  "Progettazione e analisi cinematica": "Design and kinematic analysis",
  "Assieme del meccanismo di prelievo e posizionamento modellato in SolidWorks.": "Pick-and-place mechanism assembly modelled in SolidWorks.",
  "1 GDL": "1 DOF",
  "movimento coordinato da un unico azionamento": "motion coordinated by a single drive",
  "Dinamica delle macchine e dei meccanismi": "Dynamics of Machines and Mechanisms",
  "2 persone": "2 people",
  "Dimensionamento · Modellazione di assiemi · Analisi cinematica · Meccanismi": "Sizing · Assembly modelling · Kinematic analysis · Mechanisms",
  "Realizzare un modello virtuale di un meccanismo per trasferire oggetti e studiarne traiettorie, velocità e accelerazioni nei componenti principali.": "Create a virtual model of an object-transfer mechanism and study the trajectories, velocities and accelerations of its main components.",
  "Dimensionamento del quadrilatero articolato e modellazione dell'assieme in SolidWorks.": "Four-bar linkage sizing and assembly modelling in SolidWorks.",
  "Studio del movimento sincronizzato del piatto e della cassa rotante, con meccanismo di Ginevra a otto asole.": "Study of the synchronised motion of the plate and rotating housing, using an eight-slot Geneva mechanism.",
  "Analisi in Motion a 15 giri/min e restituzione di grafici e traiettorie per piatto, rocker e croce di Malta.": "Motion analysis at 15 rpm and generation of graphs and trajectories for the plate, rocker and Geneva wheel.",
  "Il modello descrive un sistema a un grado di libertà. L'analisi documenta un movimento intermittente della croce di Malta di 45 gradi e una rotazione di 90 gradi del piatto, coordinati dal quadrilatero articolato.": "The model describes a system with one degree of freedom. The analysis documents intermittent 45-degree indexing of the Geneva wheel and 90-degree rotation of the plate, coordinated by the four-bar linkage.",
  "Studio di cinematica su modello virtuale. La presentazione segnala irregolarità nell'accelerazione dovute alla modellazione del contatto; non si tratta di una validazione fisica del meccanismo.": "Kinematic study on a virtual model. The presentation identifies acceleration irregularities caused by contact modelling; this does not constitute physical validation of the mechanism.",
  "Esempio di restituzione grafica dell'analisi cinematica in SolidWorks Motion.": "Example of graphical output from the kinematic analysis in SolidWorks Motion.",
  "Progetto universitario realizzato in coppia con Davide Calvelli. Le attività descrivono il lavoro condiviso.": "Academic project completed with Davide Calvelli. The activities describe shared work.",
  "Analisi DIC ": "DIC analysis ",
  "Progettazione · A.A. 2025/2026": "Design · Academic Year 2025/2026",
  "Sviluppo di una postazione modulare elettrificata": "Development of a modular workstation with integrated power",
  "Analisi dei costi": "Cost analysis",
  "Rappresentazione CAD del concept: seduta regolabile e banco indipendente.": "CAD representation of the concept: adjustable seat and independent desk.",
  "119 €": "EUR 119",
  "costo unitario stimato nello scenario di serie": "estimated unit cost in the series production scenario",
  "Sviluppo prodotto": "Product Development",
  "Sviluppo prodotto · House of Quality · Selezione dei concept · Costo di prodotto": "Product development · House of Quality · Concept selection · Product cost",
  "Sviluppare un'alternativa alle sedute con tavolino integrato, con attenzione a ergonomia, modularità, alimentazione elettrica e libertà di movimento.": "Develop an alternative to chairs with integrated writing tablets, focusing on ergonomics, modularity, electrical power and freedom of movement.",
  "Raccolta e classificazione dei bisogni, definizione delle metriche e delle specifiche obiettivo tramite House of Quality.": "Collection and classification of user needs; definition of metrics and target specifications using House of Quality.",
  "Generazione di soluzioni e selezione mediante concept screening e scoring; definizione di architettura e interfacce.": "Concept generation and selection through screening and scoring; definition of architecture and interfaces.",
  "Rappresentazione dell'assieme in SolidWorks e stima dei costi di componenti, lavorazioni e assemblaggio.": "Assembly modelling in SolidWorks and estimation of component, manufacturing and assembly costs.",
  "Il concept selezionato prevede banco indipendente, seduta regolabile, collegamenti fra unità e accessori modulari. La stima complessiva iniziale è di 170 euro per unità; lo scenario di produzione in serie ipotizza una riduzione del 30%, fino a 119 euro.": "The selected concept includes an independent desk, an adjustable seat, inter-unit connections and modular accessories. The initial total estimate is EUR 170 per unit; the series production scenario assumes a 30% reduction to EUR 119.",
  "Sviluppo concettuale e valutazione preliminare: i costi sono stime di progetto e non risultati di una produzione industriale avviata.": "Concept development and preliminary assessment: costs are project estimates, rather than results from established industrial production.",
  "Dettaglio del banco e dell'integrazione delle prese elettriche.": "Detail of the desk and integrated electrical sockets.",
  "Partecipazione al progetto universitario in un team di quattro persone. Concept, modello e valutazioni sono presentati come risultati del gruppo.": "Participation in an academic project in a team of four. The concept, model and assessments are presented as the team's results.",
  "Meccanismo pick-and-place ": "Pick-and-place mechanism "
};
const records = [];
const translate = value => translations[value] ?? value;
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement?.closest('script, style')) continue;
  const original = node.nodeValue;
  // Preserve spacing around icons and other inline elements.
  const trimmed = original.trim();
  const english = translations[original] ?? (translations[trimmed] !== undefined
    ? original.replace(trimmed, translations[trimmed]) : original);
  if (english !== original) records.push({node, original, english});
}
const attributes = [];
document.querySelectorAll('[alt], [aria-label], meta[name="description"]').forEach(node => {
  for (const attribute of ['alt', 'aria-label', 'content']) {
    if (!node.hasAttribute(attribute)) continue;
    const original = node.getAttribute(attribute);
    const english = translate(original);
    if (english !== original) attributes.push({node, attribute, original, english});
  }
});
const style = document.createElement('style');
style.textContent = `.language-toggle{font:inherit;font-size:.85rem;line-height:1.2;color:inherit;background:transparent;border:1px solid currentColor;border-radius:4px;padding:8px 12px;cursor:pointer;white-space:nowrap;flex-shrink:0}.language-toggle:hover{background:#eef2f5}.language-toggle:focus-visible{outline:3px solid #23394d;outline-offset:3px}@media(max-width:600px){.header-inner{flex-wrap:wrap;gap:14px}.nav{flex-wrap:wrap;gap:14px}.language-toggle{padding:7px 9px}}`;
document.head.append(style);
const toggle = document.createElement('button');
toggle.type = 'button';
toggle.className = 'language-toggle';
document.querySelector('.nav')?.append(toggle);
let language = 'en';
const requested = new URLSearchParams(location.search).get('lang');
try {
  const saved = localStorage.getItem('portfolio-language');
  if (saved === 'it' || saved === 'en') language = saved;
} catch { /* Browsing with storage disabled still supports switching. */ }
if (requested === 'it' || requested === 'en') language = requested;
const buttons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const counter = document.querySelector('[data-project-count]');
const status = document.querySelector('[data-filter-status]');
function updateStatus() {
  if (!status) return;
  const category = buttons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.filter ?? 'Tutti';
  const visible = projects.filter(project => !project.hidden).length;
  status.textContent = language === 'en'
    ? `${visible} projects displayed. Category: ${translate(category)}.`
    : `${visible} progetti visualizzati. Categoria: ${category}.`;
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  records.forEach(({node, original, english}) => { node.nodeValue = language === 'en' ? english : original; });
  attributes.forEach(({node, attribute, original, english}) => {
    node.setAttribute(attribute, language === 'en' ? english : original);
  });
  toggle.textContent = language === 'en' ? 'Italiano' : 'English';
  toggle.lang = language === 'en' ? 'it' : 'en';
  toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Italian' : 'Passa all’inglese');
  try { localStorage.setItem('portfolio-language', language); } catch {}
  updateStatus();
}
toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'it' : 'en'));
buttons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  projects.forEach(project => {
    const show = category === 'Tutti' || project.dataset.category === category;
    project.hidden = !show;
    if (show) visible++;
  });
  if (counter) counter.textContent = String(visible).padStart(2, '0');
  updateStatus();
}));
setLanguage(language);

})();
