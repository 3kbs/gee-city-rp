import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SolidBackground from '../components/SolidBackground';

const FraktionsRegelwerk = () => {
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
            GEE CITY
          </h1>
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-neon-red mb-8 text-center">
            - Fraktionsregelwerk -
          </h2>
          
          <div className="max-h-96 overflow-y-auto pr-4 space-y-6 text-gray-300 font-rajdhani text-sm leading-relaxed">
            
            <section>
              <h3 className="text-xl font-bold text-neon-red mb-4">§1 Allgemeines Fraktionsregelwerk</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§1.1 Fraktionskonformes Verhalten & Rollentreue</h4>
                <p className="mb-3">Fraktionen unterliegen einem besonderen Anspruch an glaubwürdiges und konsistentes Rollenspiel. Jedes Fraktionsmitglied vertritt seine Organisation nach außen und ist verpflichtet, sich im Sinne der jeweiligen Rolle zu verhalten.</p>
                <p className="mb-2"><strong>Das bedeutet:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Eine Mafia agiert wie eine Mafia – mit Stil, Strategie und Zurückhaltung, nicht durch kindisches oder provokantes Verhalten wie z. B. das grundlose Anspucken von Personen, Trollverhalten oder absurde Aussagen.</li>
                  <li>Das LSPD verhält sich wie eine professionelle Polizeibehörde – keine Willkür, keine Machtspielchen.</li>
                  <li>Das LSMD bewahrt stets ein medizinisch-ethisches Auftreten.</li>
                  <li>Auch Wirtschafts- oder Zivildienstfraktionen müssen ihrem Image und der angestrebten Atmosphäre gerecht werden.</li>
                </ul>
                <p className="mb-2">Unangemessenes Verhalten, das der Glaubwürdigkeit der Fraktion schadet, wird als Fraktions-UnRP gewertet. Hierzu zählen ebenfalls Dinge wie:</p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Leere oder unsinnige Jobanzeigen („Test", Emojis etc.)</li>
                  <li>Absprachen, die der Fraktionsidentität widersprechen</li>
                  <li>Rollenspielverweigerung oder bewusste Inkonsequenz im RP-Verhalten</li>
                </ul>
                <p className="mb-2"><strong>Folgen:</strong></p>
                <p>Bei Verstößen wird ein Gespräch mit der Fraktionsleitung geführt. Wiederholungen oder schwere Verstöße führen zu einer offiziellen Verwarnung, bis hin zur Suspendierung der Fraktion.</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§1.2 Fraktionsverwarnungen & Konsequenzen</h4>
                <p className="mb-3">Fraktionen tragen eine gemeinsame Verantwortung für das Verhalten ihrer Mitglieder. Kommt es zu Regelverstößen durch mehrere Fraktionsmitglieder oder zu schweren Einzelvergehen, die das Ansehen und die Struktur der Fraktion beeinträchtigen, kann eine Fraktionsverwarnung ausgesprochen werden.</p>
                <p className="mb-2"><strong>Wann wird eine Fraktionsverwarnung ausgesprochen?</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Wenn mehrere Mitglieder einer Fraktion gemeinsam an einem Regelverstoß beteiligt sind</li>
                  <li>Wenn die Fraktionsleitung ihre Aufsichtspflicht verletzt oder Fehlverhalten duldet</li>
                  <li>Wenn eine Fraktion wiederholt negativ auffällt</li>
                </ul>
                <p className="mb-2"><strong>Konsequenzen bei mehrfachen Verwarnungen:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><strong>1. Verwarnung:</strong> Klärendes Gespräch mit der Fraktionsleitung</li>
                  <li><strong>2. Verwarnung:</strong> Letzte Warnung – die Leitung steht unter besonderer Beobachtung</li>
                  <li><strong>3. Verwarnung:</strong> Zwangsauflösung der Fraktion durch das Highteam</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§1.3 Einschaltung der Fraktionsverwaltung</h4>
                <p className="mb-3">Grundsätzlich gilt: Fraktionen sind dazu angehalten, Konflikte eigenständig und respektvoll untereinander zu klären. Die Fraktionsverwaltung oder das Highteam schaltet sich erst ein, wenn keine Einigung erzielt werden kann oder regelwidriges Verhalten vorliegt.</p>
                <p className="mb-2"><strong>Voraussetzungen für die Einschaltung:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Die RP-Situation muss mindestens 10 Minuten beendet sein</li>
                  <li>Es müssen vollständige Beweise vorliegen (Videomaterial mit Bild und Ton)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§1.4 Fraktions-Discord – Verwaltung & Regeln</h4>
                <p className="mb-3">Jede offiziell anerkannte Fraktion ist verpflichtet, einen eigenen Fraktions-Discord zu führen.</p>
                <p className="mb-2"><strong>Eigentümerschaft & Kontrolle:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Der Fraktions-Discord muss an die Fraktionsverwaltung übergeben werden</li>
                  <li>Der Besitzer muss ein Mitglied der Fraktionsverwaltung oder des Highteams sein</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-neon-red mb-4">§2 Legale Fraktionen</h3>
              <p className="mb-3">Staatsfraktionen tragen eine besondere Verantwortung auf dem Server. Sie verkörpern das staatliche Gewaltmonopol und sind wesentlicher Bestandteil des serverweiten RP-Gleichgewichts.</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Waffen- & Einsatzregelung</h4>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Pro Einsatz dürfen maximal zwei Langwaffen pro Fraktionseinheit mitgeführt werden</li>
                  <li>Das Scharfschützengewehr darf nur in extremen Risikolagen eingesetzt werden</li>
                  <li>Einsatzmittel wie Taser sind vorrangig gegenüber tödlichen Waffen zu nutzen</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§2.2 Korruption innerhalb von Staatsfraktionen</h4>
                <p className="mb-2"><strong>Erlaubte Korruption:</strong> Informationsweitergabe</p>
                <p className="mb-2"><strong>Nicht korruptionsfähig sind:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Fraktionsleiter (Chiefs, Direktoren)</li>
                  <li>Beamte mit Firmen- oder Fraktionsmanagementrechten</li>
                </ul>
                <p className="mb-2"><strong>Verbotene Korruption:</strong> Wirtschaftlicher Vorteil</p>
                <p>Jegliche Form der Korruption, die auf materiellen Vorteil abzielt, ist strengstens untersagt.</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§2.3 Razzien & Terrorstatus</h4>
                <p className="mb-2"><strong>Razzien auf illegale Aktivitäten:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Pro illegaler Route darf einmal alle 2 Tage eine Razzia durchgeführt werden</li>
                  <li>Das „Campen" von Zufahrten ist untersagt</li>
                </ul>
                <p className="mb-2"><strong>Terrorstatus:</strong></p>
                <p>Kann über eine Fraktion verhängt werden bei wiederholten Gesetzesverstößen. Bringt besondere Sonderrechte für Staatsfraktionen mit sich.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-neon-red mb-4">§3 Illegale Fraktionen</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§3.1 Struktur & Verhaltensregeln</h4>
                <p className="mb-2"><strong>Mitgliederbegrenzung:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><strong>Mafien & Kartelle:</strong> Maximal 30 Mitglieder, davon 20 aktiv</li>
                  <li><strong>Gangs & MCs:</strong> Maximal 20 Mitglieder, davon 15 aktiv</li>
                </ul>
                <p className="mb-2"><strong>Besondere Einsatzregeln:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Maximal ein Helikopter gleichzeitig</li>
                  <li>Nur ein Scharfschützengewehr im Einsatz</li>
                  <li>Fraktionsfahrzeuge bei mehr als 5 Mitgliedern Pflicht</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§3.4 Routenbesitz & Übernahmebedingungen</h4>
                <p className="mb-2"><strong>Routen-Zuweisung nach Fraktionstyp:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Mafien & Kartelle: Ausschließlich Kokainroute</li>
                  <li>Gangs & MCs: Ausschließlich Weedroute und Crackherstellung</li>
                  <li>Pilzroute: Steht allen Fraktionen offen</li>
                </ul>
                <p>Jede Fraktion darf maximal eine Route gleichzeitig kontrollieren.</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§3.6 Base-Raids & Kämpfe in Anwesen</h4>
                <p className="mb-2"><strong>Voraussetzungen für einen Base-Raid:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Nur einmal pro Fraktion und Woche erlaubt</li>
                  <li>Triftiger RP-Grund zwingend erforderlich</li>
                  <li>Vorausgehende Verhandlungen verpflichtend</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§3.9 Kriegsregelung</h4>
                <p className="mb-3">Jeder Krieg muss im Voraus bei der Fraktionsverwaltung angemeldet und genehmigt werden. Ein Kriegsvertrag muss folgende Punkte beinhalten:</p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Kriegsbeginn und -dauer</li>
                  <li>Kriegszeiten</li>
                  <li>Kriegszonen</li>
                  <li>Drive-By-Regelungen</li>
                  <li>KOS-Zonen</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-neon-red mb-4">§4 Hinrichtung von IC-Charakteren</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§4.1 Blood-Out Verfahren bei illegalen Fraktionen</h4>
                <p className="mb-3">Mit dem Beitritt zu einer illegalen Fraktion akzeptiert jedes Mitglied automatisch die Möglichkeit eines sogenannten Blood-Outs.</p>
                <p className="mb-2"><strong>Arten des Blood-Outs:</strong></p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><strong>Standard-Bloodout:</strong> Normaler Ausschluss aus der Fraktion</li>
                  <li><strong>Hard-Bloodout:</strong> Vollständiger Neustart (neuer Name, neue Lebensgeschichte, Verlust aller Besitztümer)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§4.2 Unerlaubtes Farmen auf illegalen Routen</h4>
                <p className="mb-3">Wenn eine Person dreimal nachweislich dabei erwischt wird, wie sie unerlaubt auf einer beanspruchten Route farmt, ist die betroffene Fraktion berechtigt, einen Hard-Bloodout durchzuführen.</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">§4.3 Hinrichtung von Ingame-Charakteren</h4>
                <p className="mb-3">Eine Hinrichtung (Charakterlöschung im RP) darf nur mit vorheriger Genehmigung der Familie Moretti erfolgen. Es muss ein plausibler, tiefgreifender RP-Hintergrund vorliegen.</p>
                <p><strong>Wichtig:</strong> Die Hinrichtung darf ausschließlich durch die Familie Moretti erfolgen, um eine neutrale, kontrollierte Ausführung zu gewährleisten.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FraktionsRegelwerk;