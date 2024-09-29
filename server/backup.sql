--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Ubuntu 16.3-1.pgdg23.10+1)
-- Dumped by pg_dump version 16.3 (Ubuntu 16.3-1.pgdg23.10+1)

-- Started on 2024-09-29 11:25:29 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: algohub_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO algohub_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 118329)
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: algohub_user
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO algohub_user;

--
-- TOC entry 216 (class 1259 OID 118332)
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: algohub_user
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_id_seq OWNER TO algohub_user;

--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 216
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: algohub_user
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- TOC entry 217 (class 1259 OID 118333)
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: algohub_user
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO algohub_user;

--
-- TOC entry 218 (class 1259 OID 118336)
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: algohub_user
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNER TO algohub_user;

--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 218
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: algohub_user
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- TOC entry 219 (class 1259 OID 118337)
-- Name: problems; Type: TABLE; Schema: public; Owner: algohub_user
--

CREATE TABLE public.problems (
    id integer NOT NULL,
    problem_desc text NOT NULL,
    problem_url text NOT NULL,
    problem_tags text[],
    platform character varying(255) NOT NULL,
    problem_level character varying(255) NOT NULL,
    uploaded_by integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.problems OWNER TO algohub_user;

--
-- TOC entry 220 (class 1259 OID 118344)
-- Name: problems_id_seq; Type: SEQUENCE; Schema: public; Owner: algohub_user
--

CREATE SEQUENCE public.problems_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.problems_id_seq OWNER TO algohub_user;

--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 220
-- Name: problems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: algohub_user
--

ALTER SEQUENCE public.problems_id_seq OWNED BY public.problems.id;


--
-- TOC entry 221 (class 1259 OID 118345)
-- Name: user_problems; Type: TABLE; Schema: public; Owner: algohub_user
--

CREATE TABLE public.user_problems (
    id integer NOT NULL,
    user_id integer NOT NULL,
    problem_id integer NOT NULL,
    note text,
    status boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    stared boolean DEFAULT false
);


ALTER TABLE public.user_problems OWNER TO algohub_user;

--
-- TOC entry 222 (class 1259 OID 118352)
-- Name: user_problems_id_seq; Type: SEQUENCE; Schema: public; Owner: algohub_user
--

CREATE SEQUENCE public.user_problems_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_problems_id_seq OWNER TO algohub_user;

--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 222
-- Name: user_problems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: algohub_user
--

ALTER SEQUENCE public.user_problems_id_seq OWNED BY public.user_problems.id;


--
-- TOC entry 223 (class 1259 OID 118353)
-- Name: users; Type: TABLE; Schema: public; Owner: algohub_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    photo character varying(2048)
);


ALTER TABLE public.users OWNER TO algohub_user;

--
-- TOC entry 224 (class 1259 OID 118361)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: algohub_user
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO algohub_user;

--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: algohub_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3261 (class 2604 OID 126520)
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- TOC entry 3262 (class 2604 OID 126521)
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- TOC entry 3263 (class 2604 OID 126522)
-- Name: problems id; Type: DEFAULT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.problems ALTER COLUMN id SET DEFAULT nextval('public.problems_id_seq'::regclass);


--
-- TOC entry 3266 (class 2604 OID 126523)
-- Name: user_problems id; Type: DEFAULT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.user_problems ALTER COLUMN id SET DEFAULT nextval('public.user_problems_id_seq'::regclass);


--
-- TOC entry 3270 (class 2604 OID 126524)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3434 (class 0 OID 118329)
-- Dependencies: 215
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: algohub_user
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
1	20240724175723_create_users_table.js	1	2024-07-29 18:42:19.604+05:30
2	20240724175741_create_problems_table.js	1	2024-07-29 18:42:21.242+05:30
3	20240728155653_create_user_problems_table.js	1	2024-07-29 18:42:23.085+05:30
4	20240728192658_update_problems_and_user_problems_table.js	1	2024-07-29 18:42:24.314+05:30
5	20240812072726_add_stared_and_photo_columns.js	2	2024-08-12 13:00:35.201+05:30
6	20240812190936_update_photo_column.js	3	2024-08-13 00:47:15.875+05:30
\.


--
-- TOC entry 3436 (class 0 OID 118333)
-- Dependencies: 217
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: algohub_user
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- TOC entry 3438 (class 0 OID 118337)
-- Dependencies: 219
-- Data for Name: problems; Type: TABLE DATA; Schema: public; Owner: algohub_user
--

COPY public.problems (id, problem_desc, problem_url, problem_tags, platform, problem_level, uploaded_by, created_at, updated_at) FROM stdin;
46	Problem 1	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Greedy}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
47	Problem 2	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Map,"Priority Queue"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
48	Problem 3	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Set,Implementation}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
49	Problem 4	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Greedy}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
50	Problem 5	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Graph}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
51	Problem 6	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","Matrix Chain Multiplication"}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
52	Problem 7	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Bit Magic","Binary Search"}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
53	Problem 8	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Trie}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
54	Problem 9	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Linked List"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
55	Problem 10	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Optimisation,"Dynamic Programming"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
56	Problem 11	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Digit DP","Dynamic Programming"}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
57	Problem 12	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Prefix Sum",Greedy}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
58	Problem 13	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","Binary Search"}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
59	Problem 14	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Map,"Breadth First Search","Depth First Search",Graph}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
60	Problem 15	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Graph,"Depth First Search"}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
61	Problem 16	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Euler Path",Graph}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
62	Problem 17	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search Tree",Recursion}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
63	Problem 18	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Greedy}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
64	Problem 19	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Hash Map","Prefix Sum"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
65	Problem 20	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Tree",Observation}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
66	Problem 21	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Set,Implementation}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
67	Problem 22	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"LR DP","Dynamic Programming"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
68	Problem 23	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Optimisation,"Dynamic Programming"}	LeetCode	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
69	Problem 24	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
70	Problem 25	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
71	Problem 26	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Two Pointers","Dynamic Programming"}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
72	Problem 27	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Matrix}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
73	Problem 28	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",String}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
74	Problem 29	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Bit Magic","Data Structures"}	Geeks for Geeks	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
75	Problem 30	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search","Breadth First Search",Map}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
76	Problem 31	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Sorting,String}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
77	Problem 32	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Graph,"Depth First Search","Weighted Graph"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
78	Problem 33	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Breadth First Search",Sorting,Graph}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
79	Problem 34	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Breadth First Search",Matrix,Queue}	LeetCode	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
80	Problem 35	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search","Dynamic Programming"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
81	Problem 36	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search",Set}	LeetCode	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
83	Problem 38	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Z Algorithm","Pattern Finding"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
84	Problem 39	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Two Pointers",String}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
85	Problem 40	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search","Topological Sort",Sorting,"Data Structures"}	LeetCode	Hard	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
86	Problem 41	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search",Implementation}	LeetCode	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
87	Problem 42	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Two Pointers","Binary Search"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
88	Problem 43	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Matrix Exponentiation"}	Geeks for Geeks	Medium	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
89	Problem 44	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search","Depth First Search"}	CodeForces	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
90	Problem 45	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Implementation,String}	CodeForces	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
91	Problem 46	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Factors}	LeetCode	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
92	Problem 47	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Optimisation,"Dynamic Programming"}	LeetCode	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
93	Problem 48	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dijkstra's Algorithm"}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
94	Problem 49	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Union-Find}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
95	Problem 50	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Optimisation,"Dynamic Programming"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
96	Problem 51	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Prefix,"Suffix Sum"}	HackerRank	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
97	Problem 52	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Multiset}	HackerRank	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
98	Problem 53	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Digit DP","Dynamic Programming"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
99	Problem 54	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","Priority Queue"}	HackerRank	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
100	Problem 55	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Ad-hoc,"Game Theory"}	Geeks for Geeks	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
101	Problem 56	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Digit DP","Dynamic Programming"}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
103	Problem 58	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
104	Problem 59	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Suffix Sum","Prefix Sum"}	HackerRank	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
105	Problem 60	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Array}	Geeks for Geeks	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
106	Problem 61	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Disjoint Set"}	Geeks for Geeks	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
107	Problem 62	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Two Pointers"}	LeetCode	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
108	Problem 63	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Tree DP","Dynamic Programming"}	AtCoder	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
109	Problem 64	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dijkstra's Algorithm"}	CodeChef	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
110	Problem 65	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Data Structures","Priority Queue"}	CodeChef	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
111	Problem 66	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Multiset,"Depth First Search"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
112	Problem 67	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Map,Observation}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
120	Problem 75	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
121	Problem 76	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Prefix Sum","Depth First Search"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
122	Problem 77	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Priority Queue"}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
123	Problem 78	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","Bit Magic"}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
124	Problem 79	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Bit Magic","Data Structures"}	Geeks for Geeks	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
125	Problem 80	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Data Structures",Sorting}	CodeForces	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
126	Problem 81	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dijkstra's Algorithm"}	HackerRank	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
127	Problem 82	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Priority Queue","Binary Exponentiation"}	HackerRank	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
128	Problem 83	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Sorting}	HackerRank	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
129	Problem 84	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search"}	HackerRank	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
130	Problem 85	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Math,"Number Theory"}	CodeForces	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
131	Problem 86	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Recursion}	HackerRank	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
132	Problem 87	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Recursion,"Bit Magic"}	LeetCode	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
133	Problem 88	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search","Data Structures",Implementation}	HackerRank	Medium	1	2024-07-29 20:37:31.777925+05:30	2024-07-29 20:37:31.777925+05:30
168	Problem 89	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Ad-hoc,String,Hashing,Sorting}	HackerRank	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
170	Problem 91	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search"}	CodeForces	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
185	Problem 106	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Breadth First Search",Maths}	HackerRank	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
186	Problem 107	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search","Breadth First Search",Implementation}	Geeks for Geeks	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
187	Problem 108	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","LR DP","Matrix Chain Multiplication"}	LeetCode	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
188	Problem 109	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Trie,"Depth First Search"}	LeetCode	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
189	Problem 110	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Bitmask,Optimisation}	LeetCode	Easy	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
190	Problem 111	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Bitmask,Greedy,Math}	CodeForces	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
191	Problem 112	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Greedy,Observation}	CodeForces	Easy	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
192	Problem 113	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Matrix,Prefix}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
193	Problem 114	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search",Math}	LeetCode	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
194	Problem 115	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Disjoint Set Union",Sorting,"Weighted Graph"}	Geeks for Geeks	Easy	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
195	Problem 116	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Recursion}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
196	Problem 117	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Recursion,String,Algorithms}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
197	Problem 118	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming"}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
198	Problem 119	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Shortest Path","Depth First Search"}	Geeks for Geeks	Easy	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
199	Problem 120	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Inorder Traversal","Merge Sort"}	Geeks for Geeks	Medium	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
200	Problem 121	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search Tree"}	Geeks for Geeks	Easy	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
201	Problem 122	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Observation}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
202	Problem 123	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","Longest Increasing Subsequence"}	Geeks for Geeks	Hard	1	2024-07-29 23:51:48.858748+05:30	2024-07-29 23:51:48.858748+05:30
169	Problem 90	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming"}	HackerRank	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
171	Problem 92	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Exponentiation","Number Theory"}	CodeForces	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
172	Problem 93	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Depth First Search","Disjoint Set Union",Implementation,"Prefix Sum"}	CodeForces	Easy	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
173	Problem 94	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Number Theory","Prefix Sum",Implementation}	CodeForces	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
174	Problem 95	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming"}	HackerRank	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
175	Problem 96	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Lifting","Dynamic Programming","Depth First Search"}	HackerRank	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
176	Problem 97	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Sliding Window","Hash Map"}	LeetCode	Easy	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
177	Problem 98	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Trie,"Dynamic Programming",Implementation}	LeetCode	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
178	Problem 99	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Merge Sort",Implementation}	CodeForces	Easy	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
179	Problem 100	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search",Implementation}	Geeks for Geeks	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
180	Problem 101	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Matrix}	Geeks for Geeks	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
181	Problem 102	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Implementation,Optimisation}	CodeForces	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
182	Problem 103	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Math,"Brute Force",Greedy}	CodeForces	Medium	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
183	Problem 104	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search","Prefix Sum"}	HackerRank	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
184	Problem 105	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",String}	HackerRank	Hard	1	2024-07-29 23:46:58.116564+05:30	2024-07-29 23:46:58.116564+05:30
82	Problem 37	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Prefix Sum","Suffix Sum"}	Geeks for Geeks	Easy	1	2024-07-29 20:27:19.091809+05:30	2024-07-29 20:27:19.091809+05:30
102	Problem 57	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming","LR DP"}	LeetCode	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
113	Problem 68	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"LR DP","Dynamic Programming"}	Geeks for Geeks	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
114	Problem 69	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Euler Path","Disjoint Set Union"}	HackerRank	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
115	Problem 70	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Binary Search",Accuracy}	Geeks for Geeks	Easy	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
116	Problem 71	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Dynamic Programming",Backtracking}	LeetCode	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
117	Problem 72	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{"Longest Common Subsequence","Dynamic Programming"}	Geeks for Geeks	Hard	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
118	Problem 73	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Prefix}	CodeChef	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
119	Problem 74	https://www.geeksforgeeks.org/problems/water-the-plants--170646/1	{Observation,"Time Complexity"}	CodeChef	Medium	1	2024-07-29 20:36:56.739966+05:30	2024-07-29 20:36:56.739966+05:30
\.


--
-- TOC entry 3440 (class 0 OID 118345)
-- Dependencies: 221
-- Data for Name: user_problems; Type: TABLE DATA; Schema: public; Owner: algohub_user
--

COPY public.user_problems (id, user_id, problem_id, note, status, created_at, stared) FROM stdin;
26	1	117		f	2024-08-16 03:42:12.339835+05:30	f
27	1	75		t	2024-08-16 03:50:54.14221+05:30	f
28	1	74		t	2024-08-16 03:55:06.507098+05:30	f
14	1	187		t	2024-08-01 18:22:58.298896+05:30	f
3	1	171		t	2024-07-31 23:16:58.743351+05:30	f
29	1	196		t	2024-08-16 04:30:29.257073+05:30	f
1	1	168	Easy one	t	2024-07-31 23:16:56.037811+05:30	f
22	1	175		t	2024-08-12 17:51:37.6623+05:30	f
30	1	176		t	2024-08-16 04:40:32.082295+05:30	f
2	1	169		f	2024-07-31 23:16:56.054763+05:30	t
4	1	172		t	2024-07-31 23:17:03.410619+05:30	f
21	1	173		f	2024-08-12 13:43:50.270809+05:30	t
20	1	174		t	2024-08-12 13:43:46.248094+05:30	t
\.


--
-- TOC entry 3442 (class 0 OID 118353)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: algohub_user
--

COPY public.users (id, name, email, is_admin, created_at, updated_at, photo) FROM stdin;
1	Jai Marothiya	jaimarothiya48@gmail.com	t	2024-07-29 19:18:00.034846+05:30	2024-07-29 19:18:00.034846+05:30	https://lh3.googleusercontent.com/a/ACg8ocJba4mgPsaYIUIO6unSVSC8GTDEtM04UGCsFtxQq1od3m3LLkV0=s96-c
\.


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 216
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: algohub_user
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 6, true);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 218
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: algohub_user
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 220
-- Name: problems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: algohub_user
--

SELECT pg_catalog.setval('public.problems_id_seq', 202, true);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 222
-- Name: user_problems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: algohub_user
--

SELECT pg_catalog.setval('public.user_problems_id_seq', 50, true);


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: algohub_user
--

SELECT pg_catalog.setval('public.users_id_seq', 31, true);


--
-- TOC entry 3277 (class 2606 OID 118368)
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- TOC entry 3275 (class 2606 OID 118370)
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3279 (class 2606 OID 118372)
-- Name: problems problems_pkey; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.problems
    ADD CONSTRAINT problems_pkey PRIMARY KEY (id);


--
-- TOC entry 3281 (class 2606 OID 118374)
-- Name: problems problems_problem_desc_unique; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.problems
    ADD CONSTRAINT problems_problem_desc_unique UNIQUE (problem_desc);


--
-- TOC entry 3283 (class 2606 OID 118376)
-- Name: user_problems user_problems_pkey; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.user_problems
    ADD CONSTRAINT user_problems_pkey PRIMARY KEY (id);


--
-- TOC entry 3285 (class 2606 OID 118378)
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- TOC entry 3287 (class 2606 OID 118380)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3288 (class 2606 OID 118381)
-- Name: problems problems_uploaded_by_foreign; Type: FK CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.problems
    ADD CONSTRAINT problems_uploaded_by_foreign FOREIGN KEY (uploaded_by) REFERENCES public.users(id);


--
-- TOC entry 3289 (class 2606 OID 118386)
-- Name: user_problems user_problems_problem_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.user_problems
    ADD CONSTRAINT user_problems_problem_id_foreign FOREIGN KEY (problem_id) REFERENCES public.problems(id);


--
-- TOC entry 3290 (class 2606 OID 118391)
-- Name: user_problems user_problems_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: algohub_user
--

ALTER TABLE ONLY public.user_problems
    ADD CONSTRAINT user_problems_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 2058 (class 826 OID 118405)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO algohub_user;


--
-- TOC entry 2059 (class 826 OID 118406)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO algohub_user;


--
-- TOC entry 2060 (class 826 OID 118407)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO algohub_user;


--
-- TOC entry 2061 (class 826 OID 118408)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO algohub_user;


-- Completed on 2024-09-29 11:25:30 IST

--
-- PostgreSQL database dump complete
--

