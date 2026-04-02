document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'pt';
    setLanguage(savedLang);
});

function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            if(body.classList.contains('light-theme')){ icon.classList.replace('fa-sun', 'fa-moon'); } 
            else { icon.classList.replace('fa-moon', 'fa-sun'); }
        }

        function agendarWhatsApp() {
            const nomeEl = document.getElementById('clientName');
            const nome = nomeEl ? nomeEl.value : '';
            const idadeEl = document.getElementById('clientAge');
            const idade = idadeEl ? idadeEl.value : '';
            const sexoEl = document.getElementById('clientSex');
            const sexo = (sexoEl && sexoEl.selectedIndex > 0) ? sexoEl.value : 'Não informado';
            const pesoEl = document.getElementById('clientWeight');
            const peso = pesoEl && pesoEl.value ? pesoEl.value + 'kg' : 'Não informado';
            const alturaEl = document.getElementById('clientHeight');
            const altura = alturaEl && alturaEl.value ? alturaEl.value + 'cm' : 'Não informada';
            const profEl = document.getElementById('clientProf');
            const profissao = profEl && profEl.value ? profEl.value : 'Não informada';
            const rotinaEl = document.getElementById('clientRoutine');
            const rotina = rotinaEl && rotinaEl.value ? rotinaEl.value : 'Não informada';

            const nivel = document.getElementById('clientLevel');
            const nivelSelected = nivel ? nivel.value : '';
            const objetivoEl = document.getElementById('clientObjective');
            const objetivo = objetivoEl ? objetivoEl.value : '';
            const servicoEl = document.getElementById('serviceSelect');
            const servico = servicoEl ? servicoEl.value : '';
            const dataEl = document.getElementById('dateSelect');
            const data = dataEl ? dataEl.value : '';
            const horaEl = document.getElementById('timeSelect');
            const hora = horaEl ? horaEl.value : '';
            const obsEl = document.getElementById('clientObs');
            const obs = obsEl ? obsEl.value : '';
            
            if(!nome || !servico || !idade || !nivelSelected || !objetivo) { 
                alert("Por favor, preencha todos os campos obrigatórios (*)."); 
                return; 
            }
            
            const dataF = data ? new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : 'A combinar';
            let msg = `Olá Julio Cesar! Gostaria de iniciar meu treinamento:%0A%0A*Nome:* ${nome} (${idade} anos)%0A*Sexo:* ${sexo}%0A*Peso/Altura:* ${peso} / ${altura}%0A*Profissão:* ${profissao}%0A*Rotina:* ${rotina}%0A*Experiência:* ${nivelSelected}%0A*Objetivo:* ${objetivo}%0A*Plano:* ${servico}%0A*Previsão:* ${dataF} - ${hora}`;
            
            if(obs.trim() !== '') {
                msg += `%0A*Observação:* ${obs}`;
            }

            window.open(`https://wa.me/5551999999999?text=${msg}`, '_blank');
        }

        function scrollTrack(elementId, dir) {
            const container = document.getElementById(elementId);
            if (container) {
                container.scrollBy({ left: dir * 270, behavior: 'smooth' });
            }
        }

        function toggleShareModal() {
            const modal = document.getElementById('shareModal');
            if(modal) {
                modal.classList.toggle('active');
            }
        }

        function setLanguage(lang) {
            localStorage.setItem('lang', lang);
            
            // Update active state on buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const activeBtn = document.querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`);
            if (activeBtn) activeBtn.classList.add('active');

            // Apply translations
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key]; 
                }
            });

            // Apply translation placeholders
            const inputs = document.querySelectorAll('[data-i18n-ph]');
            inputs.forEach(el => {
                const key = el.getAttribute('data-i18n-ph');
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });
        }

        // --- TRANSLATION DICTIONARY ---
        const translations = {
            pt: {
                share_title: "Compartilhar",
                prof_title: "Personal Trainer",
                bio_text: "Transforme seu corpo com metodologia focada em resultados reais. Especialista em Hipertrofia, Emagrecimento e Saúde.",
                btn_consulting: "Consultoria",
                btn_plans: "Planos",
                about_title: "Sobre o Personal",
                about_p1: "Sou especialista em transformar a vida de pessoas comuns através do exercício físico. Com metodologia própria, unimos ciência e prática.",
                about_p2: "Meu foco é entregar o caminho mais eficiente para o seu objetivo, seja emagrecimento ou ganho de massa, respeitando sua individualidade.",
                results_title: "Resultados Reais",
                res_carlos_desc: "-12kg em 4 meses.",
                badge_weightloss: "EMAGRECIMENTO",
                res_fernanda_desc: "Definição muscular.",
                badge_hypertrophy: "HIPERTROFIA",
                plan_online_title: "Consultoria Online",
                card_online_name: "Consultoria Online",
                per_month: "/mês",
                feat_app: "Treino via App Exclusivo",
                feat_video: "Análise de Vídeos",
                feat_support: "Suporte WhatsApp",
                feat_periodization: "Periodização Eficiente",
                btn_select: "Selecionar",
                card_sheet_name: "Ficha de Treino",
                per_single: "/único",
                feat_protocol: "Protocolo de 6 a 8 Semanas",
                feat_division: "Divisão Inteligente (ABC/ABCD)",
                feat_pdf: "PDF Ilustrado",
                feat_no_support: "Sem suporte diário",
                plan_presential_title: "Atendimento Presencial",
                card_vip_name: "Personal VIP",
                price_custom: "A Combinar",
                feat_presential: "Atendimento Presencial",
                feat_biomechanics: "Correção Biomecânica",
                feat_motivation: "Motivação Total",
                feat_gym: "Academias & Condomínios",
                card_eval_name: "Avaliação Física",
                per_session: "/sessão",
                feat_folds: "Dobras Cutâneas",
                feat_posture: "Análise Postural",
                feat_bio: "Bioimpedância",
                feat_report: "Laudo Completo",
                btn_schedule: "Agendar",
                faq_title: "Dúvidas Frequentes",
                faq_q1: "Como funciona a consultoria online?",
                faq_a1: "Você recebe seu treino detalhado por um aplicativo exclusivo, com vídeos explicativos e meu suporte direto pelo WhatsApp para ajustes e correções.",
                faq_q2: "Serve para iniciantes?",
                faq_a2: "Com certeza! O planejamento é totalmente personalizado para o seu nível atual, respeitando suas limitações e evoluindo gradualmente.",
                faq_q3: "Quanto tempo para ver resultados?",
                faq_a3: "Com adesão ao plano, alunos costumam notar mudanças visuais e de disposição já nas primeiras 4 a 6 semanas de treino consistente.",
                form_title: "Agende sua Sessão",
                form_name: "Seu Nome *",
                ph_name: "Digite seu nome",
                form_age: "Idade *",
                ph_age: "Anos",
                form_level: "Experiência *",
                opt_select: "Selecionar...",
                opt_beg: "Iniciante",
                opt_int: "Intermediário",
                opt_adv: "Avançado",
                form_objective: "Objetivo Principal *",
                ph_objective: "Ex: Emagrecimento, Hipertrofia...",
                form_plan: "Plano Desejado *",
                form_date: "Data Preferida",
                form_shift: "Turno",
                opt_morning: "Manhã",
                opt_afternoon: "Tarde",
                opt_night: "Noite",
                form_obs: "Observação (Opcional)",
                ph_obs: "Restrições médicas, dores, relato...",
                btn_submit: "Enviar Pedido",
                cta_title: "Comece Hoje",
                cta_sub: "O corpo que você quer começa na decisão que você toma agora.",
                cta_btn: "QUERO TREINAR"
            },
            en: {
                share_title: "Share",
                prof_title: "Personal Trainer",
                bio_text: "Transform your body with a methodology focused on real results. Specialist in Hypertrophy, Weight Loss, and Health.",
                btn_consulting: "Consulting",
                btn_plans: "Plans",
                about_title: "About the Trainer",
                about_p1: "I am a specialist in transforming the lives of ordinary people through physical exercise. With my own methodology, we unite science and practice.",
                about_p2: "My focus is delivering the most efficient path to your goal, whether it's weight loss or muscle gain, respecting your individuality.",
                results_title: "Real Results",
                res_carlos_desc: "-12kg in 4 months.",
                badge_weightloss: "WEIGHT LOSS",
                res_fernanda_desc: "Muscle definition.",
                badge_hypertrophy: "HYPERTROPHY",
                plan_online_title: "Online Consulting",
                card_online_name: "Online Consulting",
                per_month: "/month",
                feat_app: "Workout via Exclusive App",
                feat_video: "Video Analysis",
                feat_support: "WhatsApp Support",
                feat_periodization: "Efficient Periodization",
                btn_select: "Select",
                card_sheet_name: "Workout Sheet",
                per_single: "/single",
                feat_protocol: "6 to 8 Weeks Protocol",
                feat_division: "Smart Division (ABC/ABCD)",
                feat_pdf: "Illustrated PDF",
                feat_no_support: "No daily support",
                plan_presential_title: "In-Person Service",
                card_vip_name: "VIP Personal",
                price_custom: "To Be Agreed",
                feat_presential: "In-Person Training",
                feat_biomechanics: "Biomechanical Correction",
                feat_motivation: "Total Motivation",
                feat_gym: "Gyms & Condos",
                card_eval_name: "Physical Eval",
                per_session: "/session",
                feat_folds: "Skin Folds",
                feat_posture: "Postural Analysis",
                feat_bio: "Bioimpedance",
                feat_report: "Complete Report",
                btn_schedule: "Schedule",
                faq_title: "Frequently Asked Questions",
                faq_q1: "How does online consulting work?",
                faq_a1: "You receive your detailed workout through an exclusive app, with explanatory videos and my direct support via WhatsApp for adjustments and corrections.",
                faq_q2: "Is it suitable for beginners?",
                faq_a2: "Absolutely! The planning is fully customized to your current level, respecting your limitations and evolving gradually.",
                faq_q3: "How long to see results?",
                faq_a3: "By sticking to the plan, students usually notice visual changes and more energy within the first 4 to 6 weeks of consistent training.",
                form_title: "Schedule Your Session",
                form_name: "Your Name *",
                ph_name: "Enter your name",
                form_age: "Age *",
                ph_age: "Years",
                form_level: "Experience *",
                opt_select: "Select...",
                opt_beg: "Beginner",
                opt_int: "Intermediate",
                opt_adv: "Advanced",
                form_objective: "Main Objective *",
                ph_objective: "Ex: Weight Loss, Hypertrophy...",
                form_plan: "Desired Plan *",
                form_date: "Preferred Date",
                form_shift: "Shift",
                opt_morning: "Morning",
                opt_afternoon: "Afternoon",
                opt_night: "Night",
                form_obs: "Note (Optional)",
                ph_obs: "Medical restrictions, pains, info...",
                btn_submit: "Send Request",
                cta_title: "Start Today",
                cta_sub: "The body you want begins with the decision you make right now.",
                cta_btn: "I WANT TO TRAIN"
            },
            es: {
                share_title: "Compartir",
                prof_title: "Entrenador Personal",
                bio_text: "Transforma tu cuerpo con una metodología enfocada en resultados reales. Especialista en Hipertrofia, Pérdida de Peso y Salud.",
                btn_consulting: "Asesoría",
                btn_plans: "Planes",
                about_title: "Sobre el Entrenador",
                about_p1: "Soy especialista en transformar la vida de personas comunes a través del ejercicio físico. Con metodología propia, unimos ciencia y práctica.",
                about_p2: "Mi objetivo es entregar el camino más eficiente para tu meta, ya sea pérdida de peso o ganancia muscular, respetando tu individualidad.",
                results_title: "Resultados Reales",
                res_carlos_desc: "-12kg en 4 meses.",
                badge_weightloss: "PÉRDIDA DE PESO",
                res_fernanda_desc: "Definición muscular.",
                badge_hypertrophy: "HIPERTROFIA",
                plan_online_title: "Asesoría Online",
                card_online_name: "Asesoría Online",
                per_month: "/mes",
                feat_app: "Entreno vía App Exclusiva",
                feat_video: "Análisis de Videos",
                feat_support: "Soporte WhatsApp",
                feat_periodization: "Periodización Eficiente",
                btn_select: "Seleccionar",
                card_sheet_name: "Plan de Entrenamiento",
                per_single: "/único",
                feat_protocol: "Protocolo de 6 a 8 Semanas",
                feat_division: "División Inteligente (ABC/ABCD)",
                feat_pdf: "PDF Ilustrado",
                feat_no_support: "Sin soporte diario",
                plan_presential_title: "Atención Presencial",
                card_vip_name: "Personal VIP",
                price_custom: "A Convenir",
                feat_presential: "Atención Presencial",
                feat_biomechanics: "Corrección Biomecánica",
                feat_motivation: "Motivación Total",
                feat_gym: "Gimnasios y Condominios",
                card_eval_name: "Evaluación Física",
                per_session: "/sesión",
                feat_folds: "Pliegues Cutáneos",
                feat_posture: "Análisis Postural",
                feat_bio: "Bioimpedancia",
                feat_report: "Informe Completo",
                btn_schedule: "Agendar",
                faq_title: "Preguntas Frecuentes",
                faq_q1: "¿Cómo funciona la asesoría online?",
                faq_a1: "Recibes tu entrenamiento detallado por una aplicación exclusiva, con videos explicativos y mi soporte directo por WhatsApp para ajustes.",
                faq_q2: "¿Sirve para principiantes?",
                faq_a2: "¡Por supuesto! La planificación es totalmente personalizada a tu nivel actual, respetando tus limitaciones.",
                faq_q3: "¿Cuánto tardan los resultados?",
                faq_a3: "Siguiendo el plan, los alumnos suelen notar cambios visuales y más energía en las primeras 4 a 6 semanas.",
                form_title: "Agenda tu Sesión",
                form_name: "Tu Nombre *",
                ph_name: "Escribe tu nombre",
                form_age: "Edad *",
                ph_age: "Años",
                form_level: "Experiencia *",
                opt_select: "Seleccionar...",
                opt_beg: "Principiante",
                opt_int: "Intermedio",
                opt_adv: "Avanzado",
                form_objective: "Objetivo Principal *",
                ph_objective: "Ej: Perder Peso, Hipertrofia...",
                form_plan: "Plan Deseado *",
                form_date: "Fecha Preferida",
                form_shift: "Turno",
                opt_morning: "Mañana",
                opt_afternoon: "Tarde",
                opt_night: "Noche",
                form_obs: "Observación (Opcional)",
                ph_obs: "Restricciones médicas, dolores, relato...",
                btn_submit: "Enviar Solicitud",
                cta_title: "Empieza Hoy",
                cta_sub: "El cuerpo que deseas comienza con la decisión que tomas ahora.",
                cta_btn: "QUIERO ENTRENAR"
            }
        };

        function shareLink(platform) {
            const currentUrl = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("Conheça a mentoria fitness de Deimersom Frazão!");
            let shareUrl = "";

            if (platform === 'whatsapp') {
                shareUrl = `https://api.whatsapp.com/send?text=${text} ${currentUrl}`;
            } else if (platform === 'facebook') {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            } else if (platform === 'twitter') {
                shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`;
            } else if (platform === 'linkedin') {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
            } else if (platform === 'tiktok') {
                // TikTok doesn't have a direct web share intent like FB/Twitter.
                // Usually copied to clipboard or directing to profile. Fallback to copy.
                navigator.clipboard.writeText(`${text} ${window.location.href}`).then(() => {
                    alert("Link copiado para compartilhar no TikTok/Instagram!");
                }).catch(err => {
                    console.error("Falha ao copiar", err);
                });
                return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        }