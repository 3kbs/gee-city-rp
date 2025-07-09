import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SolidBackground from '../components/SolidBackground';

const StaatsGesetz = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SolidBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-white hover:text-neon-red transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Hauptseite
        </Button>

        <div className="gaming-card">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Staats Gesetz
          </h1>
          
          <div className="text-left text-gray-300 font-rajdhani space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="space-y-4">
              <h2 className="font-orbitron text-2xl font-bold text-neon-red">Grundrechte (GG)</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-white text-lg">§1</h3>
                  <p><strong>Abs.1.</strong> Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§2</h3>
                  <p><strong>Abs.1.</strong> Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.</p>
                  <p><strong>Abs.2.</strong> Jeder hat das Recht auf Leben und körperliche Unversehrtheit. Die Freiheit der Person ist unverletzlich. In diese Rechte darf nur auf Grund eines Gesetzes eingegriffen werden.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§3</h3>
                  <p><strong>Abs.1.</strong> Alle Menschen sind vor dem Gesetz gleich.</p>
                  <p><strong>Abs.2.</strong> Männer und Frauen sind gleichberechtigt. Der Staat fördert die tatsächliche Durchsetzung der Gleichberechtigung von Frauen und Männern und wirkt auf die Beseitigung bestehender Nachteile hin.</p>
                  <p><strong>Abs.3.</strong> Niemand darf wegen seines Geschlechtes, seiner Abstammung, seiner Rasse, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen benachteiligt oder bevorzugt werden. Niemand darf wegen einer Behinderung benachteiligt oder ausgeschlossen werden.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§4</h3>
                  <p><strong>Abs.1.</strong> Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern und zu verbreiten und sich aus allgemein zugänglichen Quellen ungehindert zu unterrichten. Die Pressefreiheit und die Freiheit der Berichterstattung durch Rundfunk und Film werden gewährleistet. Eine Zensur findet nicht statt.</p>
                  <p><strong>Abs.2.</strong> Diese Rechte finden ihre Schranken in den Vorschriften der allgemeinen Gesetze, den gesetzlichen Bestimmungen zum Schutze der Jugend und in dem Recht der persönlichen Ehre.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§5</h3>
                  <p><strong>Abs.1.</strong> Alle Menschen haben das Recht, sich ohne Anmeldung oder Erlaubnis friedlich und ohne Waffen zu versammeln.</p>
                  <p><strong>Abs.2.</strong> Für Versammlungen unter freiem Himmel kann dieses Recht durch Gesetz oder auf Grund eines Gesetzes beschränkt werden.</p>
                  <p><strong>Abs.3.</strong> Demonstrationen müssen bei der Regierung und beim LSPD angemeldet werden. Demonstrationen werden aufgelöst sobald sie (als beendet gelten, eskalieren oder bis Straftaten durch Wort, Schrift oder Zeichen begangen werden.) Ebenso gilt auch §16 Sonstige Delikte.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§6</h3>
                  <p><strong>Abs.1.</strong> Die Wohnung ist unverletzlich.</p>
                  <p><strong>Abs.2.</strong> Durchsuchungen dürfen nur durch den Richter (sollte kein richter im Staat sein so haben die ranghöchsten des LSPD die Entscheidung darüber.), bei Gefahr im Verzuge darf auch das LSPD Jederzeit eine Durchsung durchführen.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§7</h3>
                  <p><strong>Abs.1.</strong> Jedermann hat das Recht, sich einzeln oder in Gemeinschaft mit anderen schriftlich mit Bitten oder Beschwerden an die zuständigen Stellen zu wenden.</p>
                </div>
              </div>

              <h2 className="font-orbitron text-2xl font-bold text-neon-red mt-8">Strafgesetzbuch (StGB)</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-white text-lg">§1 Keine Strafe ohne Gesetz</h3>
                  <p><strong>Abs.1.</strong> Eine Tat kann nur bestraft werden, wenn die Strafbarkeit gesetzlich bestimmt war, bevor die Tat begangen wurde.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§2 Täterschaft</h3>
                  <p><strong>Abs.1.</strong> Als Täter wird bestraft, wer die Straftat selbst oder durch einen anderen begeht.</p>
                  <p><strong>Abs.2.</strong> Begehen mehrere die Straftat gemeinschaftlich, so wird jeder als Täter bestraft (Mittäter).</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§3 Anstiftung</h3>
                  <p><strong>Abs.1.</strong> Wer eine andere Person vorsätzlich dazu bringt, eine vorsätzlich und rechtswidrig begangene Tat zu begehen, wird wie der eigentliche Täter bestraft.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§4 Beihilfe</h3>
                  <p><strong>Abs.1.</strong> Als Gehilfe oder Gehilfin gilt, wer eine andere Person vorsätzlich bei der Durchführung einer vorsätzlich und rechtswidrig begangenen Tat unterstützt. Auch diese Peron wird strafrechtlich belangt.</p>
                  <p><strong>Abs.2.</strong> Die Strafe für den Gehilfen die Gehilfin orientiert sich an der Strafhöhe, die für den Haupttäter/die Haupttäterin vorgesehen ist.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§5 Notwehr</h3>
                  <p><strong>Abs.1.</strong> Eine Handlung ist nicht rechtswidrig, wenn sie zur Abwehr eines Angriffs notwendig war und als Notwehr gilt.</p>
                  <p><strong>Abs.2.</strong> Notwehr ist jede angemessene Verteidigung, die erforderlich ist, um einen aktuellen und rechtswidrigen Angriff auf sich selbst oder eine andere Person abzuwehren.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§6 Strafmaßverschärfung</h3>
                  <p><strong>Abs.1.</strong> Wiederholungstäter gelten als Personen, die innerhalb eines bestimmten Zeitraums mehrfach durch vergleichbare Straftaten auffällig geworden sind. In solchen Fällen kann das Strafmaß nach Ermessen der zuständigen Strafverfolgungsbehörden verschärft werden.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§7 Privatgrundstücke</h3>
                  <p><strong>Abs.1.</strong> Private Grundstücke sind grundsätzlich vor dem unbefugten Betreten durch Dritte geschützt. Ohne die ausdrückliche Zustimmung des Eigentümers oder eines richterlichen Beschlusses ist das Betreten solcher Grundstücke untersagt.</p>
                  <p><strong>Abs.2.</strong> Das Los Santos Police Department (LSPD) ist nur unter bestimmten Voraussetzungen berechtigt, ein privates Grundstück zu betreten. Diese sind: Vorlage eines gültigen Durchsuchungsbefehls, Vorliegen eines Haftbefehls, oder akute Gefahr im Verzug, bei der unmittelbares Eingreifen erforderlich ist.</p>
                  <p><strong>Abs.3.</strong> Werden auf einem privaten Grundstück Straftaten begangen oder von außen beobachtet, ist das LSPD berechtigt, zum Schutz der öffentlichen Ordnung einzuschreiten.</p>
                  <p><strong>Abs.4.</strong> Ein Betreten privater Grundstücke durch Polizeikräfte ohne rechtliche Grundlage stellt eine unzulässige Verletzung der Privatsphäre dar und kann dienstrechtliche Konsequenzen nach sich ziehen.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§8 Wirtschaftskriminalität</h3>
                  <p><strong>Abs.1.</strong> Versuchter Fahrzeugdiebstahl - Der versuchte Diebstahl eines Kraftfahrzeugs (z. B. PKW, Motorrad) wird als strafbare Handlung gewertet, auch wenn das Vorhaben nicht vollendet wird.</p>
                  <p><strong>Abs.2.</strong> Versuchter Diebstahl eines Luftfahrzeugs - Der Versuch, ein Flugzeug oder einen Helikopter unrechtmäßig an sich zu nehmen, stellt eine schwerwiegende Straftat dar.</p>
                  <p><strong>Abs.3.</strong> Unerlaubte Straßenblockaden - Das absichtliche Blockieren von Straßen oder öffentlichen Wegen, etwa im Rahmen angemeldeter Demonstrationen, gilt als Ordnungswidrigkeit oder Straftat, abhängig vom Ausmaß der Störung.</p>
                  <p><strong>Abs.4.</strong> Bestechung von Amtsträgern - Jeder Versuch, Beamte oder sonstige Amtspersonen durch Geld, Sachleistungen oder andere Vorteile zu beeinflussen, wird als Bestechung gewertet und hart sanktioniert.</p>
                  <p><strong>Abs.5.</strong> Geiselnahme und Freiheitsberaubung mit Erpressungsabsicht - Die widerrechtliche Festsetzung einer Person mit dem Ziel der Erpressung stellt eine schwerwiegende Straftat dar und wird mit maximaler Härte verfolgt.</p>
                  <p><strong>Abs.6.</strong> Überfall oder Diebstahl an Einzelpersonen - Der Diebstahl oder die Anwendung von Gewalt zur Entwendung von Wertgegenständen gegenüber Zivilpersonen gilt als Raubdelikt und zieht empfindliche Strafen nach sich.</p>
                  <p><strong>Abs.7.</strong> Raubüberfälle auf Geschäfte oder Einrichtungen - Das gewaltsame Eindringen in Verkaufsräume oder andere Einrichtungen zur Entwendung von Waren oder Geld ist ein schweres Verbrechen.</p>
                  <p><strong>Abs.8.</strong> Banküberfall - Ein Überfall auf eine Bank oder ein vergleichbares Finanzinstitut ist ein kapitales Verbrechen mit hoher Strafverfolgungspriorität.</p>
                  <p><strong>Abs.9.</strong> Besitz oder Verstecken von Schwarzgeld - Das Mitführen oder Lagern von nicht legal deklarierten Geldmitteln (Schwarzgeld) gilt als wirtschaftskrimineller Tatbestand.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§9 Waffendelikte</h3>
                  <p><strong>Abs.1.</strong> Führen einer legalen Waffe ohne gültige Lizenz - Das Tragen einer grundsätzlich legalen, jedoch nicht lizenzierten Waffe stellt eine Ordnungswidrigkeit oder Straftat dar – je nach Situation und Waffentyp.</p>
                  <p><strong>Abs.2.</strong> Besitz einer illegalen oder nicht registrierten Waffe - Wer eine Schusswaffe besitzt, die nicht registriert ist oder gesetzlich verboten ist, macht sich eines schweren Waffendelikts schuldig.</p>
                  <p><strong>Abs.3.</strong> Offenes Tragen von Waffen in öffentlichen oder bewohnten Gebieten - Das sichtbare Mitführen von Waffen in Städten, Wohnvierteln oder anderen belebten Zonen ist untersagt und wird als Gefährdung der öffentlichen Sicherheit gewertet.</p>
                  <p><strong>Abs.4.</strong> Abgabe von Schüssen / Gebrauch einer Schusswaffe - Das Abfeuern einer Schusswaffe, unabhängig von Ziel oder Absicht, stellt eine besonders schwerwiegende Straftat dar und wird entsprechend geahndet.</p>
                  <p><strong>Abs.5.</strong> Besitz oder Lagerung von Waffen in Boxen ohne Meldung - Das Lagern von Waffen in Immobilien, Fahrzeugen oder Depots (z. B. Waffenboxen) ohne vorherige Meldung oder Genehmigung ist unzulässig.</p>
                  <p><strong>Abs.7.</strong> Waffenhandel ohne behördliche Genehmigung - Der Verkauf, Tausch oder Handel mit Waffen ohne gültige Lizenz ist strikt verboten und fällt unter schweren illegalen Waffenhandel.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§10 Körperliche Integrität und Schutz der Person</h3>
                  <p><strong>Abs.1.</strong> Beleidigung (leicht, mittel, schwer): Verbal oder schriftlich geäußerte Beleidigungen, die die Ehre einer Person angreifen, stellen – je nach Schweregrad – einen Ordnungsverstoß oder eine Straftat dar.</p>
                  <p><strong>Abs.2.</strong> Belästigung & öffentliches Ärgernis: Jede Form von unerwünschter, aufdringlicher Annäherung oder provozierendem Verhalten in der Öffentlichkeit, das andere Personen erheblich stört oder belästigt, ist untersagt.</p>
                  <p><strong>Abs.3.</strong> Beteiligung an oder Annahme von Prostitution: Die aktive Ausübung, Förderung oder Inanspruchnahme sexueller Dienstleistungen gegen Entgelt ist verboten und wird strafrechtlich verfolgt.</p>
                  <p><strong>Abs.4.</strong> Unterlassene Hilfeleistung: Wer in einer erkennbaren Notlage nicht hilft, obwohl dies möglich und zumutbar wäre, macht sich der unterlassenen Hilfeleistung schuldig.</p>
                  <p><strong>Abs.5.</strong> Ernsthafte Drohung: Die Androhung von körperlicher Gewalt, schwerem Schaden oder anderen ernsten Konsequenzen stellt eine strafbare Handlung dar, auch wenn sie nicht umgesetzt wird.</p>
                  <p><strong>Abs.6.</strong> Versuchter Angriff / versuchte Geiselnahme: Der gezielte Versuch, eine Person körperlich anzugreifen oder ihrer Freiheit zu berauben, ist auch ohne tatsächliche Ausführung strafbar.</p>
                  <p><strong>Abs.7.</strong> Freiheitsberaubung: Das widerrechtliche Festhalten, Einsperren oder anderweitige Einschränken der Bewegungsfreiheit einer Person gilt als Freiheitsberaubung und wird streng geahndet.</p>
                  <p><strong>Abs.8.</strong> Körperverletzung (leicht, mittel, schwer): Jede vorsätzliche oder fahrlässige Verletzung einer anderen Person – unabhängig vom Schweregrad – ist ein Verstoß gegen das Schutzrecht der körperlichen Unversehrtheit.</p>
                  <p><strong>Abs.9.</strong> Körperverletzung mit Todesfolge: Führt eine Körperverletzung unbeabsichtigt zum Tod des Opfers, liegt eine besonders schwere Straftat vor.</p>
                  <p><strong>Abs.10.</strong> Versuchter Mord oder Totschlag: Der geplante oder impulsive Versuch, eine Person zu töten, stellt eine der schwerwiegendsten Straftaten dar.</p>
                  <p><strong>Abs.11.</strong> Vollendeter Mord: Die vorsätzliche und vollendete Tötung eines Menschen wird als Mord gewertet und mit der höchstmöglichen Strafe geahndet.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§11 Umgang mit Beamten</h3>
                  <p><strong>Abs.1.</strong> Behinderung von Einsatzkräften: Die aktive Störung oder Behinderung polizeilicher, medizinischer oder anderer offizieller Einsätze – etwa durch Blockieren, Ablenken oder Eingreifen – ist untersagt und wird geahndet.</p>
                  <p><strong>Abs.2.</strong> Flucht vor Maßnahmen: Das bewusste Entziehen aus einer laufenden polizeilichen Maßnahme, wie z. B. eine Verkehrskontrolle oder Festnahme, gilt als Flucht und stellt einen klaren Rechtsverstoß dar.</p>
                  <p><strong>Abs.3.</strong> Widerstand gegen Vollstreckungsbeamte: Körperlicher oder verbaler Widerstand gegen Polizeikräfte oder andere befugte Beamte während ihrer Dienstausübung ist untersagt und führt zu einer strafrechtlichen Konsequenz.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§12 Sonstige Delikte</h3>
                  <p><strong>Abs.1.</strong> Unerlaubtes Betreten von Sperrzonen: Das Betreten von abgesperrten oder besonders gesicherten Bereichen ohne ausdrückliche Genehmigung ist verboten und wird als Ordnungsverstoß gewertet.</p>
                  <p><strong>Abs.2.</strong> Unangemeldete Versammlungen oder Demonstrationen: Das Abhalten öffentlicher Versammlungen oder Demonstrationen ohne vorherige Anmeldung oder Genehmigung stellt einen Regelverstoß dar.</p>
                  <p><strong>Abs.3.</strong> Vermummung bei Versammlungen: Das gezielte Verbergen der Identität (z. B. durch Maskierung) bei öffentlichen Veranstaltungen oder Demos ist untersagt und kann als Zeichen krimineller Absichten gewertet werden.</p>
                  <p><strong>Abs.4.</strong> Missbrauch des Notrufs: Das absichtliche Absetzen falscher oder unbegründeter Notrufe blockiert wichtige Ressourcen und stellt eine strafbare Handlung dar.</p>
                  <p><strong>Abs.5.</strong> Amtsanmaßung: Das Ausgeben als Polizeibeamter, Rettungskraft oder eine andere Amtsperson ohne tatsächliche Befugnis ist strengstens untersagt und wird mit Nachdruck verfolgt.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§13 Gefängnisausbruch</h3>
                  <p><strong>Abs.1.</strong> Wer aus einem Gefängnis oder einer Polizeigewahrsamseinrichtung unbefugt flieht, macht sich strafbar.</p>
                  <p><strong>Abs.2.</strong> Ebenso wird bestraft, wer einem Gefangenen bei der Flucht durch Beihilfe unterstützt, beispielsweise durch Dritte</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§14 Ermittlungen</h3>
                  <p><strong>Abs.1.</strong> Ermittlungen gegen Gangs oder Privatpersonen dürfen nur mit einer von der Staatsanwaltschaft durchgeführt werden.</p>
                  <p><strong>Abs.2.</strong> Sollte keine Staatsanwaltschaft anwesend sein, darf die GIU über Spontane oder geplante Ermittlungen entscheiden.</p>
                  <p><strong>Abs.3.</strong> Sollte das LSPD ohne die Erlaubnis der Gang Intelligence Unit oder der Staatsanwaltschaft eine Ermittlung durchführen, so ist dies widerrechtlich und vor Gericht nicht verwendbar.</p>
                </div>
              </div>

              <h2 className="font-orbitron text-2xl font-bold text-neon-red mt-8">Drogengesetzbuch (DGB)</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-white text-lg">§1 Drogenkonsum und Besitz</h3>
                  <p><strong>Abs.1.</strong> Der Konsum verbotener Substanzen ist grundsätzlich untersagt, es sei denn, er erfolgt mit einer gültigen Lizenz. Alkohol, Cannabis und Zigaretten sind von diesem Verbot ausgenommen und benötigen keine Lizenz.</p>
                  <p><strong>Abs.2.</strong> Der Besitz von verbotenen Substanzen in Mengen unter 10 Gramm gilt als geringe Menge.</p>
                  <p><strong>Abs.2a.</strong> Der Besitz von verbotenen Substanzen in Mengen über 10 Gramm gilt als nicht geringe Menge.</p>
                  <p><strong>Abs.3.</strong> Der Handel oder Schmuggel von Drogen ist verboten.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§2 Illegale Drogenproduktion</h3>
                  <p><strong>Abs.1.</strong> Das Betreiben von Drogenplantagen oder Anlagen zur Verarbeitung von Drogen ist untersagt.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§3 Illegaler Drogenhandel</h3>
                  <p><strong>Abs.1.</strong> Der Verkauf oder die Verteilung von Drogen an Dritte ist verboten.</p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">§4 Herstellung und Verkauf legaler Drogen</h3>
                  <p><strong>Abs.1.</strong> Die Herstellung sowie der Verkauf von legalen Drogen – insbesondere Cannabis, Alkohol und Tabakwaren – ist ausschließlich mit behördlicher Lizenz gestattet.</p>
                  <p><strong>Abs.2.</strong> Lizensierte Betriebe unterliegen strengen gesetzlichen Auflagen hinsichtlich Qualitätssicherung, Reinheitsstandards, Alterskontrollen sowie Sicherheits- und Gesundheitsvorschriften.</p>
                  <p><strong>Abs.3.</strong> Unbefugte Herstellung oder der Verkauf legaler Drogen ohne gültige Lizenz ist verboten und wird mit Geldstrafe oder Freiheitsstrafe geahndet.</p>
                  <p><strong>Abs.4.</strong> Die Weitergabe legaler Drogen an Minderjährige ist ausdrücklich untersagt und stellt eine Straftat dar.</p>
                </div>
              </div>

              <h2 className="font-orbitron text-2xl font-bold text-neon-red mt-8">Weitere Gesetzbücher</h2>
              <p className="text-gray-400">Antikorruptionsgesetz, Allgemeine Vorschriften über den unmittelbaren Zwang (UzWG), Strafprozessordnung (StPO), Straßenverkehrsordnung (StVO), Tierschutzgesetz (TierSchG), und Handelsgesetzbuch (HdGB) sind ebenfalls Teil des vollständigen Gesetzeswerks.</p>
              
              <div className="text-center mt-8 p-4 bg-gaming-dark/50 rounded-lg">
                <p className="text-neon-red font-bold">📖 Vollständige Gesetzestexte</p>
                <p className="text-sm text-gray-400">Für detaillierte Informationen zu allen Gesetzbüchern wende dich an die Staatsanwaltschaft oder das LSPD.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaatsGesetz;