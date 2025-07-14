
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
                    <p className="text-foreground leading-relaxed">
                      🚨 Neues Polizei-System für Gee City – Der ultimative Roleplay-Alltag!
Entdecke die revolutionäre Polizei-Umgebung, die deinen FiveM Server auf das nächste Level hebt! Mit hunderten von Features, realistischen Interaktionen und tiefgründigen Systemen wird der Alltag in Gee City noch intensiver und authentischer.

🛠️ Ausrüstung & Gegenstände
Die Polizei in Gee City ist bestens ausgestattet:

Alkoholtester
Messt den Blutalkoholgehalt von Spielern – perfekt für Kontrollen.
Fingerabdruckscanner
Identifiziert Verdächtige durch Fingerabdrücke.
Bodenmarkierungen & Sperren
Platziere Konen, Barrikaden und Arbeitsscheinwerfer – synchronisiert für alle Spieler.
Stacheldrahtstreifen
Zerstöre Reifen von Fahrzeugen, die über Stacheldraht fahren.
Geschwindigkeitskamera
Registriere Fahrzeuge, die zu schnell unterwegs sind – inkl. konfigurierbarer Strafen.
Metall-/Glas-Schutzschild
Bietet Schutz beim Anpeilen – ideal für Einsätze.
Nachtvision-/Thermalbrille
Aktivierbar mit /toggleNVG – perfekt für nächtliche Operationen.
🚓 Patrouillenwerkzeuge
Die tägliche Arbeit der Polizei wird durch diese Tools vereinfacht:

Radar
Integriertes Fahrzeugradar mit minimalistischer UI – inkl. Autolock-Geschwindigkeitsgrenzen.
Bodycam & Dashcam
Bodycam : Aktivierbar jederzeit – Live-Übertragung im Polizeirevier.
Dashcam : Installierbar in Fahrzeugen – perfekt für Unfallermittlungen.
Tracker (Job-Blips)
Echtzeit-Positionen der Beamten auf der Karte – mit unterschiedlichen Blip-Typen (Auto, Hubschrauber, etc.).
🧾 MDT (Mobile Data Terminal)
Das Herzstück der Polizei in Gee City:

🔐 Berechtigungssystem
Vollständig konfigurierbar: Lesen, Schreiben, Löschen – individuell für jede Seite.
Voreingestellte Berechtigungen oder komplett deaktivierbar.
🏷️ Tags & Farbcodierte Strafen
Erstelle Tags für Profile, Fahrzeuge, Berichte – mit individuellen Farben.
Verbessere Übersichtlichkeit durch farbcodierte Strafen.
🌐 Unbegrenzte MDTs
Erstelle separate MDTs für Polizei, EMS, DOJ, Mechaniker – mit einstellbaren Seiten und Jobs.
Custom Pages : Integriere externe Webseiten (iframe) oder benutzerdefinierte UIs.
🚨 Dispatch-System
Die Einsätze in Gee City werden koordiniert:

Call Manager
Navigiere durch aktive Notrufe – setze Wegpunkte bei Einsätzen.
Kartenansicht
Zeige alle Notrufe & Einheiten an – zeichne Linien, Kreise oder Polygone.
Vordefinierte Warnungen
Schießerei, Geschwindigkeitsverstoß, Fahrzeugdiebstahl – konfigurierbar nach Bedarf.
🚫 Gefängnis-System
Ein tiefgründiges Gefängnis-System mit vielen Möglichkeiten:

👟 Fußfesseln & Fußfesseln-Tracker
Setze Fußfesseln auf Spieler – alle Polizisten sehen die Echtzeitposition.
Entferne sie mit dem Prison-MDT oder einer Kettensäge.
🧱 Gefängnis-Aktivitäten
Aufgaben : Müllabfuhr, Gartenarbeit, Essensausgabe – reduziere Strafe durch Erfolg.
Roulette & Drogenherstellung : Interagiere mit NPCs und verdiene Gegenstände.
NPCs : 16 interagierbare Charaktere (Wärter, Ärzte, Häftlinge).
🔥 Gefängnisflucht
Explosivstoffe, Hacking oder Graben : 3 Wege, um das Gefängnis zu verlassen!
🔍 Beweissystem
Ermittle wie ein Profi:

Beweistypen : Kugelschalen, Blutproben, Fingerabdrücke – sammel mit Taschenlampe.
Szene-Rekonstruktion : Fotografiere die Tatortszene – alle Beweise mit Bezeichnungen.
GSR-Test : Analysiere Schusswaffenrückstände – entferne sie durch Händewaschen.
🏢 Weitere Highlights
Evidenz-Schließfächer : Speichere/nimm Beweise mit benutzerdefinierten Namen.
Zusammenarbeit zwischen Abteilungen : Gemeinsame Berichte & Tags.
Mitarbeiter-Einstellung : Stelle neue Kolleg:innen direkt im MDT an.
🧩 Zusammenfassung
Mit dem neuen Polizei-System in Gee City wird dein Roleplay-Alltag realistischer, dynamischer und unvergesslich !

✅ Kompatibel mit FiveM Asset Escrow System
✅ Integration mit beliebten Mods (tk_cctv, tk_jail, tk_dispatch)
✅ Unendliche Möglichkeiten für kreative Ermittlungen & Einsätze
Willkommen in Gee City – Wo jeder Tag ein neuer Einsatz wird! 🚨
Melde dich an und tauche ein in die Welt der Polizei, Justiz und Action!
                    </p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground text-center pt-4">
                    Last updated: {new Date().toLocaleDateString()}
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
