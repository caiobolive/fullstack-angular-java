# Questionário — Entrevista Java Pleno (perguntas e respostas)

Este documento reúne perguntas **prováveis** em entrevistas para **desenvolvedor Java pleno**, com respostas objetivas cobrindo **conceitos**, **boas práticas**, **performance**, **concorrência**, **Spring**, **JPA** e tópicos de **produção**.

---
## 1) Fundamentos da linguagem

1. **Qual a diferença entre JDK, JRE e JVM?**  
   **Resposta:** **JDK** é o kit de desenvolvimento (compilador, ferramentas, JRE). **JRE** é o ambiente de execução (JVM + libs). **JVM** executa bytecode, gerencia memória/threads/GC.

2. **O que muda entre `==` e `equals()`?**  
   **Resposta:** `==` compara **referência** (identidade) para objetos e **valor** para primitivos. `equals()` compara **igualdade lógica** (por padrão, em `Object`, é identidade; classes como `String` sobrescrevem).

3. **Qual o contrato entre `equals()` e `hashCode()`?**  
   **Resposta:** Se `a.equals(b)` é `true`, então `a.hashCode() == b.hashCode()` **deve** ser `true`. O inverso não é obrigatório. Quebrar isso gera bugs em `HashMap/HashSet`.

4. **Diferença entre `String`, `StringBuilder` e `StringBuffer`?**  
   **Resposta:** `String` é **imutável**; concatenação repetida pode gerar lixo e custo. `StringBuilder` é mutável e **não thread-safe** (mais rápido). `StringBuffer` é mutável e **sincronizado** (mais lento, legado).

5. **Checked vs unchecked exceptions: quando usar?**  
   **Resposta:** **Checked** (ex.: `IOException`) quando o chamador **pode recuperar** e é importante explicitar o fluxo. **Unchecked** (`RuntimeException`) para **erros de programação**/estado inválido e invariantes quebradas.

6. **Como você define uma classe imutável?**  
   **Resposta:** Campos `final`, sem setters, estado interno não exposto (defensive copy), e garantir que objetos mutáveis internos não vazem por getters/constructor.

---
## 2) Collections e estruturas (incluindo internals)

7. **Como `HashMap` funciona por alto?**  
   **Resposta:** Usa `hashCode()` → espalha em “buckets” (array). Colisões viram lista/árvore (a partir de certo tamanho). Performance típica \(O(1)\) amortizado; pior caso degrada se muitas colisões.

8. **Por que `HashMap` depende de `equals/hashCode` corretos?**  
   **Resposta:** Porque a chave é localizada pelo **hash** e confirmada por **equals**; se mudar o estado da chave após inserção ou quebrar contrato, a chave pode “sumir” do mapa.

9. **`ArrayList` vs `LinkedList`: quando escolher?**  
   **Resposta:** `ArrayList` é ótimo para **acesso por índice** e iteração cache-friendly; inserções no meio custam shift. `LinkedList` raramente vale a pena; overhead alto e baixa locality (na prática, quase sempre `ArrayList`).

10. **`HashMap` vs `ConcurrentHashMap`: principais diferenças?**  
   **Resposta:** `ConcurrentHashMap` é seguro para concorrência sem “lock global” na maioria das operações; fornece operações atômicas (`compute`, `merge`). Iteradores são “weakly consistent”.

---
## 3) Concorrência e paralelismo

11. **Diferença entre concorrência e paralelismo?**  
   **Resposta:** Concorrência é lidar com múltiplas tarefas intercaladas; paralelismo é executar simultaneamente em múltiplos núcleos.

12. **O que `volatile` garante (e o que não garante)?**  
   **Resposta:** Garante **visibilidade** e ordem (happens-before) para leitura/escrita do campo. Não garante atomicidade de operações compostas (ex.: `count++`).

13. **`synchronized` vs `ReentrantLock`: quando preferir qual?**  
   **Resposta:** `synchronized` é simples e geralmente suficiente. `ReentrantLock` é útil quando precisa de `tryLock`, timeouts, fairness, múltiplas conditions ou controle explícito do lock/unlock.

14. **Quando usar `AtomicInteger`/atomics?**  
   **Resposta:** Para operações simples e altamente concorrentes (incrementos, flags) sem lock explícito, evitando contenção de `synchronized` em cenários de alta taxa.

15. **Como escolher tamanho de thread pool?**  
   **Resposta:** Depende se o trabalho é **CPU-bound** (≈ número de cores) ou **I/O-bound** (pode ser maior, mas limitado por recursos como pool de conexões). Monitorar fila, latência, rejeições e uso de CPU.

16. **O que são virtual threads (Java 21+) e quando ajudam?**  
   **Resposta:** São threads leves geridas pela JVM, ótimas para **I/O bloqueante** (muitas requisições simultâneas). Não aceleram CPU-bound; e podem expor gargalos (ex.: pool de conexões pequeno).

17. **O que é structured concurrency e por que pode aparecer em entrevista?**  
   **Resposta:** É um modelo onde subtarefas concorrentes têm **ciclo de vida delimitado** por um “escopo”, com cancelamento/erros mais previsíveis (conceito moderno em Java 21+ e evoluções até Java 25).

---
## 4) JVM, memória e Garbage Collector (GC)

18. **Stack vs heap: explique e dê exemplo de impacto.**  
   **Resposta:** Stack guarda frames/variáveis locais/referências por thread; heap guarda objetos compartilhados. Recursão profunda estoura stack; retenção de objetos estoura heap.

19. **Como identificar e investigar leak/memória alta?**  
   **Resposta:** Ver métricas (heap used, GC, metaspace), gerar **heap dump**, analisar dominators/retained size e referências. Procurar caches sem limite, coleções estáticas, listeners não removidos.

20. **Quando você consideraria trocar/tunar GC (G1/ZGC)?**  
   **Resposta:** Se há problema claro (pausas altas, latência) e evidência por métricas/logs de GC. **G1** é padrão geral; **ZGC** é opção para baixa latência com trade-off de CPU.

---
## 5) Boas práticas, código limpo e design

21. **O que é coesão e acoplamento?**  
   **Resposta:** Alta coesão (responsabilidade clara) e baixo acoplamento (dependências mínimas) facilitam manutenção, testes e evolução.

22. **Como evitar “service gigante”/God Class?**  
   **Resposta:** Separar por casos de uso, extrair componentes por responsabilidade (validação, persistência, integração), aplicar princípios (SOLID), e manter limites claros.

23. **Quando usar `Optional` (e quando evitar)?**  
   **Resposta:** Bom como **retorno** para representar ausência. Evitar em campos/JPA e como parâmetro em API pública (frequentemente piora legibilidade/compatibilidade).

24. **Qual diferença entre composição e herança?**  
   **Resposta:** Herança cria acoplamento forte e hierarquias rígidas; composição (delegar para colaboradores) costuma ser mais flexível e testável.

---
## 6) Spring (Core e Boot)

25. **O que é IoC/DI no Spring?**  
   **Resposta:** O container cria e injeta dependências (IoC). DI reduz acoplamento e facilita testes (mockar dependências).

26. **`@Component`, `@Service`, `@Repository`: muda algo?**  
   **Resposta:** Semântica e alguns comportamentos: `@Repository` pode traduzir exceções de persistência. Em geral, ajudam organização e leitura.

27. **Por que preferir injeção por construtor?**  
   **Resposta:** Garante dependências obrigatórias, facilita testes, permite `final`, e evita problemas de ciclo/estado parcialmente inicializado.

28. **O que o `@SpringBootApplication` faz?**  
   **Resposta:** Combina `@Configuration`, `@EnableAutoConfiguration` e `@ComponentScan`. Auto-config cria beans baseado em classpath e propriedades.

29. **Como diagnosticar auto-config “estranha”?**  
   **Resposta:** Usar condições (`@Conditional...`), relatório de auto-config (modo debug) e entender precedência de propriedades e profiles.

30. **Tomcat vs Netty (no ecossistema Spring)?**  
   **Resposta:** Tomcat é servlet tradicional (Spring MVC). Netty é comum em reativos (WebFlux) e oferece modelo assíncrono; escolha depende do stack (bloqueante vs reativo) e requisitos.

---
## 7) REST, APIs e segurança

31. **O que é idempotência e onde importa?**  
   **Resposta:** Operações idempotentes podem ser repetidas sem mudar o resultado além da primeira vez (ex.: `GET`, `PUT` idealmente). Importa para retries, gateways e resiliência.

32. **Códigos HTTP: quais são os mais comuns e quando usar?**  
   **Resposta:** `200/201/204`, `400`, `401`, `403`, `404`, `409`, `422`, `500`. A escolha deve refletir semântica (ex.: `409` conflito de estado).

33. **Como lidar com autenticação/autorização em APIs?**  
   **Resposta:** Autenticação (quem é) via JWT/session/OAuth2. Autorização (o que pode) via roles/policies. Sempre validar no backend, não confiar no frontend.

34. **Quais boas práticas de logging em backend Java?**  
   **Resposta:** Logs estruturados, correlação (traceId), níveis corretos, não logar segredos/PII, e logar contexto de falhas sem “stacktrace spam” em fluxos esperados.

---
## 8) JPA/Hibernate e banco de dados

35. **O que é o problema N+1 e como resolver?**  
   **Resposta:** Ao carregar lista e depois relacionamentos lazily, gera N consultas. Mitigar com fetch join, entity graphs, batch fetch, ou remodelagem de consulta.

36. **Transação: o que você precisa saber para entrevista?**  
   **Resposta:** Boundary transacional (onde começa/termina), isolamento (dirty/non-repeatable/phantom), rollback, e efeitos de chamadas internas (proxy) no Spring.

37. **O que é connection pool e por que impacta performance?**  
   **Resposta:** Reutiliza conexões DB (caro criar). Pool pequeno gera filas/timeout; pool grande demais pode derrubar DB. Ajuste baseado em carga e latência.

38. **Índices: quando ajudam e quando atrapalham?**  
   **Resposta:** Ajudam leituras (filtros/joins/ordenação) mas custam em escrita (insert/update) e espaço. Escolher por queries reais (EXPLAIN).

---
## 9) Testes (unit, integração, contrato)

39. **Como diferenciar teste unitário de integração?**  
   **Resposta:** Unitário isola dependências (mock) e é rápido. Integração usa componentes reais (DB, HTTP, Spring context) e valida wiring/infra.

40. **O que é “pirâmide de testes” e por que importa?**  
   **Resposta:** Mais testes unitários, menos integrações, poucos E2E. Ajuda custo/tempo/estabilidade do pipeline.

41. **Como testar controllers/serviços no Spring de forma saudável?**  
   **Resposta:** Unit para service (mock repo/clients). MVC slice (`@WebMvcTest`) para controller. Integração com `@SpringBootTest` quando precisa de wiring real.

---
## 10) Performance e produção

42. **Como você investiga latência alta em produção?**  
   **Resposta:** Começa por métricas (p95/p99), depois logs/traces, identifica gargalo (DB, pool, GC, lock contention), reproduz com carga e aplica correções mensuráveis.

43. **Caching: quando usar e quais cuidados?**  
   **Resposta:** Usar quando há alto read e dados relativamente estáveis. Cuidar de invalidação, TTL, cache stampede, consistência e tamanho.

44. **Quais erros comuns de performance em Java backend?**  
   **Resposta:** N+1, falta de índices, serialização pesada, pools mal dimensionados, excesso de logs, GC por alocação alta, e locks desnecessários.

45. **O que você monitora num serviço Java?**  
   **Resposta:** Latência (p95/p99), taxa de erro, throughput, GC/heap, CPU, threads, pool de conexões, filas/retries/timeouts, e dependências externas.

---
## 11) Arquitetura e conceitos de sistemas

46. **Monólito vs microserviços: trade-offs?**  
   **Resposta:** Monólito é simples de operar e transacionar; microserviços escalam times/deploy, mas aumentam complexidade (rede, observabilidade, consistência, versionamento).

47. **Como garantir resiliência em integrações?**  
   **Resposta:** Timeouts, retries com backoff+jitter, circuit breaker, bulkheads, fallback, e idempotência; tudo com observabilidade.

48. **Consistência eventual: quando aparece?**  
   **Resposta:** Em eventos/mensageria e sistemas distribuídos. Exige modelagem de compensações, reprocessamento, deduplicação e rastreabilidade.

---
## 12) Perguntas “mão na massa” (experiência)

49. **Conte um bug difícil que você resolveu (o que mediu, o que mudou).**  
   **Resposta (modelo):** Descrever sinais, hipótese, evidência (logs/metrics/dumps), correção aplicada, teste/rollback plan e resultado (redução p99/erros).

50. **Como você faz review de PR em Java?**  
   **Resposta:** Checa corretude, legibilidade, design, testes, transações, concorrência, performance, segurança (input validation/SSRF/SQLi), e padrões do time.

---
## Como usar este documento

- **Treino rápido (30–60 min)**: foque nas seções 1–4 e 6–8.
- **Diferencial de pleno**: respostas com **trade-offs**, sinais de produção (**métricas/GC/pools**) e experiência com **concorrência** e **JPA**.

