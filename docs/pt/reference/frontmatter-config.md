---
outline: deep
description: Referência de todas as opções de configuração frontmatter disponíveis para páginas Markdown do .
---

# Configuração Frontmatter {#frontmatter-config}

Frontmatter permite a configuração baseada em páginas. Em cada arquivo markdown, você pode usar a configuração frontmatter para sobrepor opções de configuração a nível de site ou de tema. Além disso, existem opções de configuração que só podem ser definidas em frontmatter.

Exemplo de uso:

```md
---
title: Documentação com 
editLink: true
---
```

Você pode acessar os dados do frontmatter através da variável global `$frontmatter` em expressões Vue:

```md
{{ $frontmatter.title }}
```

## title

- Tipo: `string`

Título para a página. É o mesmo que [config.title](./site-config#title), e sobrepõe a configuração a nível de site.

```yaml
---
title: 
---
```

## titleTemplate

- Tipo: `string | boolean`

O sufixo para o título. É o mesmo que [config.titleTemplate](./site-config#titletemplate), e sobrepõe a configuração a nível de site.

```yaml
---
title: 
titleTemplate: Gerador de site estático com Vite & Vue
---
```

## description

- Tipo: `string`

Descrição para a página. É o mesmo que [config.description](./site-config#description), e sobrepõe a configuração a nível de site.

```yaml
---
description: 
---
```

## head

- Tipo: `HeadConfig[]`

Especifica tags head adicionais a serem injetadas na página atual. Elas serão acrescentadas após as tags head injetadas pela configuração a nível de site.

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## Somente no Tema Padrão {#default-theme-only}

As seguintes opções frontmatter são aplicáveis apenas ao usar o tema padrão.

### layout

- Tipo: `doc | home | page`
- Padrão: `doc`

Determina o layout da página.

- `doc` - Aplica estilos de documentação padrão ao conteúdo markdown.
- `home` - Layout especial para a "Página Inicial". Você pode adicionar opções extras como `hero` e `features` para criar rapidamente uma bela página inicial.
- `page` - Comporta-se de maneira semelhante a `doc`, mas não aplica estilos ao conteúdo. Útil quando você deseja criar uma página totalmente personalizada.

```yaml
---
layout: doc
---
```

### hero <Badge type="info" text="apenas para página inicial" />

Define o conteúdo da seção _hero_ na página inicial quando `layout` está definido como `home`. Mais detalhes em [Tema Padrão: Página Inicial](./default-theme-home-page).

### features <Badge type="info" text="apenas para página inicial" />

Define os itens a serem exibidos na seção de funcionalidades quando `layout` está definido como `home`. Mais detalhes em [Tema Padrão: Página Inicial](./default-theme-home-page).

### navbar

- Tipo: `boolean`
- Padrão: `true`

Se deve exibir a [barra de navegação](./default-theme-nav).

```yaml
---
navbar: false
---
```

### sidebar

- Tipo: `boolean`
- Padrão: `true`

Se deve exibir a [barra lateral](./default-theme-sidebar).

```yaml
---
sidebar: false
---
```

### aside

- Tipo: `boolean | 'left'`
- Padrão: `true`

Define a localização do componente aside no layout `doc`.

Configurar este valor como `false` impede a apresentação do elemento aside.\
Configurar este valor como `true` apresenta o aside à direita.\
Configurar este valor como `'left'` apresenta o aside à esquerda.

```yaml
---
aside: false
---
```

### outline

- Tipo: `number | [number, number] | 'deep' | false`
- Padrão: `2`

Os níveis do cabeçalho no _outline_ a serem exibidos para a página. É o mesmo que [config.themeConfig.outline.level](./default-theme-config#outline), e sobrepõe o valor definido na configuração no nível do site.

### lastUpdated

- Tipo: `boolean | Date`
- Padrão: `true`

Se deve mostrar o texto de [última atualização](./default-theme-last-updated) no rodapé da página atual. Se uma data e hora específica forem especificadas, ela será exibida em vez do último horário de modificação do git.

```yaml
---
lastUpdated: false
---
```

### editLink

- Tipo: `boolean`
- Padrão: `true`

Se deve exibir o [link de edição](./default-theme-edit-link) no rodapé da página atual.

```yaml
---
editLink: false
---
```

### footer

- Tipo: `boolean`
- Padrão: `true`

Se deve exibir o [rodapé](./default-theme-footer).

```yaml
---
footer: false
---
```

### pageClass

- Tipo: `string`

Adiciona um nome de classe extra a uma página específica.

```yaml
---
pageClass: custom-page-class
---
```

Em seguida, você pode personalizar os estilos desta página específica no arquivo `.vitepress/theme/custom.css`:

```css
.custom-page-class {
  /* estilos específicos da página */
}
```
