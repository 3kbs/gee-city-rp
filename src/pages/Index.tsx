
import React from 'react';
import SolidBackground from '../components/SolidBackground';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SolidBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GEE City RP - Update Ideen
            </h1>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-elegant">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hier findest du Neue ideen vom Gee City Server!
                </p>
                
                <div className="mt-8 space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Latest Updates</h2>
                  
                  <div className="bg-background/50 rounded-lg p-6 border border-border/30">
                    <div className="text-foreground leading-relaxed">
                      <h3 className="text-xl font-semibold mb-4 text-primary">🚨 Neues Polizei-System für Gee City</h3>
                      <p className="mb-6 text-muted-foreground">
                        Entdecke die revolutionäre Polizei-Umgebung, die deinen FiveM Server auf das nächste Level hebt! 
                        Mit hunderten von Features, realistischen Interaktionen und tiefgründigen Systemen wird der Alltag in Gee City noch intensiver und authentischer.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🛠️ Ausrüstung & Gegenstände</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Alkoholtester</span> - Messt den Blutalkoholgehalt von Spielern</li>
                            <li>• <span className="font-medium">Fingerabdruckscanner</span> - Identifiziert Verdächtige durch Fingerabdrücke</li>
                            <li>• <span className="font-medium">Bodenmarkierungen & Sperren</span> - Platziere Konen, Barrikaden und Arbeitsscheinwerfer</li>
                            <li>• <span className="font-medium">Stacheldrahtstreifen</span> - Zerstöre Reifen von Fahrzeugen</li>
                            <li>• <span className="font-medium">Geschwindigkeitskamera</span> - Registriere zu schnelle Fahrzeuge</li>
                            <li>• <span className="font-medium">Metall-/Glas-Schutzschild</span> - Bietet Schutz beim Anpeilen</li>
                            <li>• <span className="font-medium">Nachtvision-/Thermalbrille</span> - Aktivierbar mit /toggleNVG</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🚓 Patrouillenwerkzeuge</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Radar</span> - Integriertes Fahrzeugradar mit minimalistischer UI</li>
                            <li>• <span className="font-medium">Bodycam & Dashcam</span> - Live-Übertragung und Unfallermittlungen</li>
                            <li>• <span className="font-medium">Tracker (Job-Blips)</span> - Echtzeit-Positionen der Beamten auf der Karte</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🧾 MDT (Mobile Data Terminal)</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Berechtigungssystem</span> - Vollständig konfigurierbar für jede Seite</li>
                            <li>• <span className="font-medium">Tags & Farbcodierte Strafen</span> - Erstelle Tags mit individuellen Farben</li>
                            <li>• <span className="font-medium">Unbegrenzte MDTs</span> - Separate MDTs für Polizei, EMS, DOJ, Mechaniker</li>
                            <li>• <span className="font-medium">Custom Pages</span> - Integriere externe Webseiten oder benutzerdefinierte UIs</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🚨 Dispatch-System</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Call Manager</span> - Navigiere durch aktive Notrufe</li>
                            <li>• <span className="font-medium">Kartenansicht</span> - Zeige alle Notrufe & Einheiten an</li>
                            <li>• <span className="font-medium">Vordefinierte Warnungen</span> - Schießerei, Geschwindigkeitsverstoß, Fahrzeugdiebstahl</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🚫 Gefängnis-System</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Fußfesseln & Tracker</span> - Setze Fußfesseln auf Spieler</li>
                            <li>• <span className="font-medium">Gefängnis-Aktivitäten</span> - Müllabfuhr, Gartenarbeit, Essensausgabe</li>
                            <li>• <span className="font-medium">16 interagierbare NPCs</span> - Wärter, Ärzte, Häftlinge</li>
                            <li>• <span className="font-medium">3 Fluchtmöglichkeiten</span> - Explosivstoffe, Hacking oder Graben</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🔍 Beweissystem</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Beweistypen</span> - Kugelschalen, Blutproben, Fingerabdrücke</li>
                            <li>• <span className="font-medium">Szene-Rekonstruktion</span> - Fotografiere die Tatortszene</li>
                            <li>• <span className="font-medium">GSR-Test</span> - Analysiere Schusswaffenrückstände</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 text-primary">🏢 Weitere Highlights</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• <span className="font-medium">Evidenz-Schließfächer</span> - Speichere/nimm Beweise mit benutzerdefinierten Namen</li>
                            <li>• <span className="font-medium">Zusammenarbeit zwischen Abteilungen</span> - Gemeinsame Berichte & Tags</li>
                            <li>• <span className="font-medium">Mitarbeiter-Einstellung</span> - Stelle neue Kolleg:innen direkt im MDT an</li>
                          </ul>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                          <h4 className="text-lg font-medium mb-2 text-primary">✅ Kompatibilität & Integration</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Kompatibel mit FiveM Asset Escrow System</li>
                            <li>• Integration mit beliebten Mods (tk_cctv, tk_jail, tk_dispatch)</li>
                            <li>• Unendliche Möglichkeiten für kreative Ermittlungen & Einsätze</li>
                          </ul>
                        </div>

                        <div className="text-center mt-6">
                          <p className="text-primary font-medium">
                            🚨 Willkommen in Gee City – Wo jeder Tag ein neuer Einsatz wird! 🚨
                          </p>
                          <p className="text-muted-foreground mt-2">
                            Melde dich an und tauche ein in die Welt der Polizei, Justiz und Action!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground text-center pt-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </div>
                
                <div className="mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">📺 Videos</h2>
                  
                  <div className="space-y-6">
                    {/* Top row - 2 videos */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <h3 className="text-lg font-medium mb-3 text-primary">Server Trailer</h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Server Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <h3 className="text-lg font-medium mb-3 text-primary">Polizei System Demo</h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Polizei System Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom row - 3 videos */}
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <h3 className="text-lg font-medium mb-3 text-primary">Gameplay Highlights</h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Gameplay Highlights"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <h3 className="text-lg font-medium mb-3 text-primary">Event Recap</h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Event Recap"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <h3 className="text-lg font-medium mb-3 text-primary">Tutorial Guide</h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Tutorial Guide"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
